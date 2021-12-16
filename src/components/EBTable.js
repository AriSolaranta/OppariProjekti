import { useState } from "react";
import { EasybaseProvider, useEasybase } from "easybase-react";
import ebconfig from "../ebconfig";
import { Card, Col } from "react-bootstrap";
import './TableStyles.css';


function App() {
  return (
    <EasybaseProvider ebconfig={ebconfig}>
      <Data />
    </EasybaseProvider>
  );
}

function Kortti({ title, chapter, rating, _key }) {
  const { db, e } = useEasybase();
  
  const cardStyle = {
    boxShadow: '0 3px 6px rgba(0,0,0,0.3)',
    margin: 10,
    padding: '5px 10px 5px 10px',
    borderRadius: 15,
    color: 'black',
    position: 'relative',
    width: '19rem',
    backgroundColor: 'teal'
  }

  const numText = {
    color: 'white',
    fontWeight: 'bold',
  }

  const deleteButtonStyle = {
    position: 'absolute',
    bottom: 10,
    right: 5,
    border: 'none',
    backgroundColor: 'teal',
  }

  const deleteButtonClicked = async () => {
    await db('MANGA').delete().where({ _key }).one();
  }

  const updateRating = async () => {
    try{
      const inRating = prompt("Rating", rating);

      if (!inRating) return;

      await db('MANGA').set({
        rating: Number(inRating),
      }).where({ _key }).one();

    } catch (_) {
      alert("Error on input format")
    }
  }

  const updateTitle = async () => {
    try{
      const inTitle = prompt("Title", title);
      if (!inTitle) return;

      await db('MANGA').set({
        title: inTitle,

      }).where({ _key }).one();

    } catch (_) {
      alert("Error on input format")
    }
  }

  const updateChapter = async () => {
    try{
      const inChapter = prompt("Chapter number", chapter);
      if (!inChapter) return;
     
      await db('MANGA').set({
        chapter: Number(inChapter),
      
      }).where({ _key }).one();

    } catch (_) {
      alert("Error on input format")
    }
  }

  return (
    <div style={cardStyle}>
      <button style={deleteButtonStyle} onClick={deleteButtonClicked}>&#10060;</button>
      <Col>
      <Card>
        <Card.Header
        onClick={updateTitle} style={{ fontWeight: 'bold', color: 'white'}}>{title} 
        </Card.Header>
        <hr color="yellow"></hr>
        <Card.Body>
          <Card.Text onClick={updateChapter}>Chapter: <b style={numText}>{chapter}</b></Card.Text>
          <Card.Text onClick={updateRating}>Rating: <b style={numText}>{rating}</b></Card.Text>
        </Card.Body>
      </Card>
      </Col>
    </div>
  )
}

function Data() {
  const [isChecked, setIsChecked, query, setQuery] = useState(false);
  const { db, useReturn, e } = useEasybase();

  const { frame } = useReturn(() => {
    if (isChecked)
    return db('MANGA').return().orderBy({by:"rating", sort:"desc"})
    else
    return db('MANGA').return().orderBy({by:"title", sort:"asc"})
  }, [isChecked]);

  const insertRecord = async () => {
    try {
      const inTitle = prompt("Title", "");
      const inChapter = prompt("Chapter number", "");
      const inRating = prompt("Rating", "");
      
      if (!inTitle || !inRating || !inChapter) return;

      await db('MANGA').insert({
        title: inTitle,
        chapter: Number(inChapter),
        rating: Number(inRating),

      }).one();
    } catch (_) {
      alert("Error on input format")
    }
  }

  const insertRootStyle = {
    border: "0.35em dashed purple",
    borderRadius: 9,
    margin: 15,
    padding: 12,
    width: 100,
    height: 50,
    color: "black",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
  }

  return (
    <div style={{ paddingTop: "3em" }}>
      <div style={{ margin: "2em" }}>
        <label>
          <b>Sort by rating </b>
          <input
            type="checkbox"
            value={isChecked}
            onChange={e => setIsChecked(e.target.checked)}
          />
        </label>
      </div>
      <div style={{ display: "" }}>
        <button style={insertRootStyle} onClick={insertRecord}>+ Add Title</button>
          <div style={{ display: "flex" , flexWrap: "wrap", justifyContent: "space-evenly" }}>
            {frame.map(ele => 
              <div>
                <Col>
                  <Kortti {...ele} />
                </Col>
              </div>
            )} 
          </div>     
      </div>
    </div>
  )
}

export default App;