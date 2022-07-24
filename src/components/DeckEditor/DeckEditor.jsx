import React, { useEffect, useState, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./DeckEditor.css";
import { Switch, useRouteMatch, Route, useParams } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import EditorSidebar from "../EditorSidebar/EditorSidebar";
import DeckHeader from "../DeckHeader/DeckHeader";
import PublicDeck from "../PublicDeck/PublicDeck";
import { requestDecklist } from "../../actions";
import Spinner from "../spinner/Spinner";

const CreateForm = lazy(() => import("../CreateForm/CreateForm"));
const DeckListImg = lazy(() => import("../DeckListImg/DeckListImg"));
const Recommended = lazy(() => import("../Recommended/Recommended"));
const CardList = lazy(() => import("../CardList/CardList"));

function DeckEditor() {
  const dispatch = useDispatch();
  const { decklist, isPending, authorised } = useSelector(
    (state) => state.requestDecklist
  );
  const { userId } = useSelector((state) => state.loginStatus);
  let { url } = useRouteMatch();
  const { deckId } = useParams();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    dispatch(requestDecklist(deckId, userId));
    setIsMounted(true);
  }, [deckId, userId, dispatch]);

  return isPending ? (
    <Spinner />
  ) : authorised ? (
    <>
      <div className="card-search-container">
        <DeckHeader />
        <EditorSidebar />
        <div className="editor-sidebar-bracket">
          <SearchBar url={url} />
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path={`/decklist/:${deckId}`}>
                <CardList />
              </Route>
              <Route path={`${url}/imageview`}>
                <DeckListImg decklist={decklist} />
              </Route>
              <Route path={`${url}/recommended`}>
                <Recommended />
              </Route>
              <Route path={`${url}/edit`}>
                <CreateForm />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </div>
    </>
  ) : (
    isMounted && <PublicDeck />
  );
}

export default DeckEditor;
