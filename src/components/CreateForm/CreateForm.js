import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';
import Select from 'react-select-virtualized';
import { requestDecklist } from '../../actions';
import './CreateForm.css';

function CreateForm () {
    const { deckDetails } = useSelector(state => state.requestDecklist)
    const [loadedCards, setLoadedCards] = useState([]);
    const [selectedOptionMain, setSelectedOptionMain] = useState({ label: deckDetails.commander, value: deckDetails.commander });
    const [selectedOptionPartner, setSelectedOptionPartner] = useState({ label: deckDetails.partner, value: deckDetails.partner });
    const [isPartner, setIsPartner] = useState(true);
    const [isWithPartner, setIsWithPartner] = useState("");
    const [deckName, setDeckName] = useState(deckDetails.deckName);
    const [deckDescription, setDeckDescription] = useState(deckDetails.description);
    const [deckId, setDeckId] = useState(0);
    const [invalid, setInvalid] = useState();
    const { userId } = useSelector((state) => state.loginStatus)
    const location = useLocation()
    const dispatch = useDispatch()

    useEffect(() => { 
        fetch(`https://edh-builder-api-m7vk6.ondigitalocean.app/commanders`)
        .then(response => response.json())
        .then(loadedCards => {
            setLoadedCards(loadedCards)
        })
        .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        if(location.pathname === '/adddeck'){
            setSelectedOptionMain(null);
            setDeckDescription("");
            setSelectedOptionPartner(null);
            setDeckName("")
            setIsPartner(false)
        }
    },[location, setDeckDescription, setDeckName, setIsPartner, setSelectedOptionMain, setSelectedOptionPartner])

    useEffect(() => {
        if (!deckDetails.partner){ 
            setIsPartner(false)
        }
    }, [setIsPartner, deckDetails])

    const createDeck = (e) => { 
        const fetchUrl = `https://edh-builder-api-m7vk6.ondigitalocean.app/${location.pathname !== "/adddeck" ? `editdeck/${deckDetails.deckID}` : "createdeck"}`
        fetch(fetchUrl , { 
            method: 'post',
            headers: { 
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userID: userId,
                deckName: deckName,
                commander: selectedOptionMain && selectedOptionMain.value,
                deckDescription: deckDescription, 
                partner: selectedOptionPartner && selectedOptionPartner.value
            })
          })
          .then(response => response.json())
          .then(deckID => { 
              if(location.pathname === "/adddeck") { 
                  setDeckId(deckID) 
              } 
              else { 
                  dispatch(requestDecklist(deckDetails.deckID, userId))
              }
            })
          .catch(setInvalid(true))
        }

    const handleChangeMain = selectedOption => {
        setSelectedOptionMain(selectedOption)
        if (selectedOption && selectedOption.isPartner){ 
            setIsPartner(true);
            setIsWithPartner("")
            if (selectedOption.text.includes(`Partner with`))  
                setIsWithPartner(selectedOption.oracle_text.substring(13, selectedOption.oracle_text.indexOf(" (")))     
        } else { 
            setIsPartner(false)
            setSelectedOptionPartner(null)
        }
    }

    const handleChangePartner = selectedOption => { 
        setSelectedOptionPartner(selectedOption)
    }

    const filterOption = (option, input) => {
        if (option.value.toLowerCase().replace(/'|,|-/g, "").includes(input.toLowerCase().replace(/'|,|-/g, ""))) {
          return true;
        }
        return false;
    };

    const SelectFunc = (options, handleChange, defaultVal) => { 
        return <Select  
                maxMenuHeight={200}
                defaultValue={defaultVal}
                options={options}
                placeholder="Select your commander"
                onChange={handleChange}
                filterOption={filterOption}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                        ...theme.colors,
                        text: "orangered",
                        primary25: "indigo",
                        primary: "indigo",
                        fontsize: "10px"
                    }
                    })}
                />
    }
    
    const commanders = loadedCards.map(commander => {
        return {value: commander.cardName, label: commander.cardName, keyword: commander.isPartner, text: commander.oracle_text}
    });
    const partners = loadedCards.filter(partner => partner.isPartner && !partner.oracle_text.includes("Partner with"))
    .map(partner => {return {value: partner.cardName, label: partner.cardName}})
    const singlePartner = [{value: isWithPartner, label: isWithPartner}]

        return ( 
        <>
        { deckId ? <Redirect to={`/decklist/${deckId}`} /> :
        <div className="outer-create-container">
           <div className="new-deck">
           <div className= "banner"><h1>Deck Details</h1></div>
           <div className = "new-deck-form">
            <input onChange={(e) => setDeckName(e.target.value)} value={deckName} type="text" placeholder="Deck Name" id="deckName"/>
            {SelectFunc(commanders, handleChangeMain, selectedOptionMain)}
                {(isPartner ? SelectFunc(isWithPartner.length ? singlePartner : partners, handleChangePartner, selectedOptionPartner) : null
            )}
            <textarea onChange={(e) => setDeckDescription(e.target.value)} value={deckDescription}/>
            {invalid && <div className="invalid">Please make sure a commander is selected and you have chosen a name for your deck.</div>}
            <input 
                 onClick={(e) => createDeck(e)} 
                 type="button" 
                 id="new-deck-button" 
                 value={location.pathname === '/adddeck' ? "build" : "edit"}
            />
            </div>
             <div className="bottom-banner"></div>
            </div>
        </div>
        }
        </>
        );
}


export default CreateForm;