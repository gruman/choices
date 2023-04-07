import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Form, Button, Card, Alert } from 'react-bootstrap'

let defaultChoices = [
  {
    "score": 10,
    "choice": "Sam gets kicked in the balls"
  },
  {
    "score": 10,
    "choice": "Asriel eats a burger"
  },
  {
    "score": 10,
    "choice": "Dean says the b-word"
  },
  {
    "score": 10,
    "choice": "The musical one"
  }
]

function App() {
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Error Message');
  const [choiceObjects, setChoiceObjects] = useState(defaultChoices);
  const [gameStarted, setGameStarted] = useState(false);
  const [choice0, setChoice0] = useState('');
  const [choice1, setChoice1] = useState('');
  const [choice2, setChoice2] = useState('');
  const [choice3, setChoice3] = useState('');
  const [choice4, setChoice4] = useState('');
  const [choice5, setChoice5] = useState('');
  const [choice6, setChoice6] = useState('');
  const [choice7, setChoice7] = useState('');
  const [choice8, setChoice8] = useState('');
  const [choice9, setChoice9] = useState('');

  const [random1, setRandom1] = useState(0);
  const [random2, setRandom2] = useState(1);

  function startGame() {
    let tempChoices = [
      { "score": 10, "choice": "" },
      { "score": 10, "choice": "" },
      { "score": 10, "choice": "" },
      { "score": 10, "choice": "" },
      { "score": 10, "choice": "" },
      { "score": 10, "choice": "" },
      { "score": 10, "choice": "" },
      { "score": 10, "choice": "" },
      { "score": 10, "choice": "" },
      { "score": 10, "choice": "" }
    ];
    let num = 0;
    if (choice0 != '') {
      tempChoices[num].choice = choice0;

      num++;
    }
    if (choice1 !== '') {
      tempChoices[num].choice = choice1;
      num++;
    }
    if (choice2 !== '') {
      tempChoices[num].choice = choice2;
      num++;
    }
    if (choice3 !== '') {
      tempChoices[num].choice = choice3;
      num++;
    }
    if (choice4 !== '') {

      tempChoices[num].choice = choice4;
      num++;
    }
    if (choice5 !== '') {
      tempChoices[num].choice = choice5;
      num++;
    }
    if (choice6 !== '') {
      tempChoices[num].choice = choice6;
      num++;
    }
    if (choice7 !== '') {
      tempChoices[num].choice = choice7;
      num++;
    }
    if (choice8 !== '') {
      tempChoices[num].choice = choice8;
      num++;
    }
    if (choice9 !== '') {
      tempChoices[num].choice = choice9;
      num++;
    }
    if (num > 2) {
      let i;
      for (i = 0; i < tempChoices.length; i++) {
        if (tempChoices[i].choice == "") {
          // delete from array
          tempChoices.splice(i);
        }
      }
      setChoiceObjects(tempChoices);
      setGameStarted(false);
      setError(false);
    }
    else {
      setError(true);
      setErrorMessage("Please choose at least three choices.")
    }
  }

  function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  function makeChoice(winner, loser) {
    let first = Math.floor(Math.random() * (choiceObjects.length - 0) + 0);
    let second = Math.floor(Math.random() * (choiceObjects.length - 0) + 0);
    if (first != second) {
      setRandom1(first);
      setRandom2(second);

      let winningChoice;
      let losingChoice;
      winningChoice = 1 / (1 + Math.pow(10, (choiceObjects[loser].score - choiceObjects[winner].score) / 400));
      losingChoice = 1 / (1 + Math.pow(10, (choiceObjects[winner].score - choiceObjects[loser].score) / 400));

      let tempChoices = choiceObjects;
      tempChoices[winner].score = tempChoices[winner].score + winningChoice;
      tempChoices[loser].score = tempChoices[loser].score - losingChoice;

      setChoiceObjects(tempChoices);
    }
    else {
      makeChoice(winner, loser);
    }

    // sort objects
    choiceObjects.sort(compare);
  }

  function compare(a, b) {
    if (a.score < b.score) {
      return 1;
    }
    if (a.score > b.score) {
      return -1;
    }
    return 0;
  }

  function getRandomChoices() {

    let first = Math.floor(Math.random() * (choiceObjects.length - 0) + 0);
    let second = Math.floor(Math.random() * (choiceObjects.length - 0) + 0);
    if (first !== second) {
      setRandom1(first);
      setRandom2(second);
    }
    else {
      setRandom1(0);
      setRandom2(1);
    }
  }


  useEffect(() => {

    // sort objects
    choiceObjects.sort(compare);
    getRandomChoices();
  }, [])

  return (
    <div className="App">
      <div>
        <div className="container mid-container mb-2 pt-2 pb-2">
          <h1
            >
            <a href="/choices">
              Choice Chooser
            </a>
          </h1>
        </div>
      </div>
      <div className="container mid-container">

        {
          gameStarted ?
            <div className="coupon">
              {
                error ?
                  <Alert variant="dark">
                    {errorMessage}
                  </Alert>
                  : ''
              }
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control maxlength="50" type="text" placeholder="Enter a Choice" value={choice0}
                    onChange={(e) => setChoice0(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control maxlength="50" type="text" placeholder="Enter a Choice" value={choice1}
                    onChange={(e) => setChoice1(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control maxlength="50" type="text" placeholder="Enter a Choice" value={choice2}
                    onChange={(e) => setChoice2(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control maxlength="50" type="text" placeholder="Enter a Choice" value={choice3}
                    onChange={(e) => setChoice3(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control maxlength="50" type="text" placeholder="Enter a Choice" value={choice4}
                    onChange={(e) => setChoice4(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Enter a Choice" value={choice5}
                    onChange={(e) => setChoice5(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Enter a Choice" value={choice6}
                    onChange={(e) => setChoice6(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Enter a Choice" value={choice7}
                    onChange={(e) => setChoice7(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Enter a Choice" value={choice8}
                    onChange={(e) => setChoice8(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Enter a Choice" value={choice9}
                    onChange={(e) => setChoice9(e.target.value)}
                  />
                </Form.Group>
                <Button variant="dark"
                  className="mt-2"
                  size="lg"
                  onClick={() => startGame()}>
                  Submit
                </Button>
              </Form>
            </div>
            :
            <div>
              <div className="row">
                <div className="col">
              <div
                className="choice d-flex justify-content-center align-items-center"
                onClick={() => makeChoice(random1, random2)}
              >
                <p className="bg-text">
                  {choiceObjects[random1].choice}
                </p>
              </div>
              </div>
              <div class="col">
              <div
                className="choice d-flex justify-content-center align-items-center"
                onClick={() => makeChoice(random2, random1)}
              >
                <p className="bg-text">
                  {choiceObjects[random2].choice}
                </p>
              </div>
              </div>
              </div>
              <div className="mt-4 d-flex justify-content-center align-items-center">
                {
                  showResults ?
                  <div>
                  <Button variant="dark" onClick={() => setShowResults(false)}>
                    Hide Results
                  </Button>
                <ol>
                  {
                    Object.keys(choiceObjects).map((i, index) => (

                      <li className="scores-text">
                        {choiceObjects[index].choice} ({Math.round(choiceObjects[index].score * 1000) / 10000})
                      </li>
                    ))
                  }
                </ol>
                    </div> :
                    <div>
                  <Button variant="dark" onClick={() => setShowResults(true)}>
                    Show Results
                  </Button>
                      </div>
                }
                    
              </div>
            </div>
        }
      </div>
    </div >
  );
}

export default App;
