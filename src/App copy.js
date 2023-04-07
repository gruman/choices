import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Row, Col, Form, Button, Card, Alert } from 'react-bootstrap'

function App() {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Error Message');
  const [numChoices, setNumChoices] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [choiceValues, setChoiceValues] = useState([]);
  const [choices, setChoices] = useState(['Choice #1 is long', 'Choice #2 is long', 'Choice #3 is long', 'Choice #4 is long']);
  const [scores, setScores] = useState([1, 1, 1, 1]);
  const [gameStarted, setGameStarted] = useState(true);
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
    let addChoices = [];
    let addScores = [];
    let num = 0;
    if (choice0 != '') {
      addChoices.push(choice0);
      addScores.push(1);
      num++;
    }
    if (choice1 != '') {
      addChoices.push(choice1);
      addScores.push(1);
      num++;
    }
    if (choice2 != '') {
      addChoices.push(choice2);
      addScores.push(1);
      num++;
    }
    if (choice3 != '') {
      addChoices.push(choice3);
      addScores.push(1);
      num++;
    }
    if (choice4 != '') {
      addChoices.push(choice4);
      addScores.push(1);
      num++;
    }
    if (choice5 != '') {
      addChoices.push(choice5);
      addScores.push(1);
      num++;
    }
    if (choice6 != '') {
      addChoices.push(choice6);
      addScores.push(1);
      num++;
    }
    if (choice7 != '') {
      addChoices.push(choice7);
      addScores.push(1);
      num++;
    }
    if (choice8 != '') {
      addChoices.push(choice8);
      addScores.push(1);
      num++;
    }
    if (choice9 != '') {
      addChoices.push(choice9);
      addScores.push(1);
      num++;
    }
    if (num > 2)
    {
    setChoices(addChoices);
    setScores(addScores);
    setGameStarted(false);
    setError(false);
    }
    else
    {
      setError(true);
      setErrorMessage("Please choose at least three choices.")
    }
  }

  function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

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
    let first = Math.floor(Math.random() * (choices.length - 0) + 0);
    let second = Math.floor(Math.random() * (choices.length - 0) + 0);
    if (first != second) {
      setRandom1(first);
      setRandom2(second);

      let winningChoice;
      let losingChoice;
      winningChoice = 1 / (1 + Math.pow(10, (scores[loser] - scores[winner]) / 400));
      losingChoice = 1 / (1 + Math.pow(10, (scores[winner] - scores[loser]) / 400));

      let tempScores = scores;
      tempScores[winner] = scores[winner] + winningChoice;
      tempScores[loser] = scores[loser] - losingChoice;
      let numArray = tempScores;
      numArray.sort(function (a, b) {
        return a - b;
      });
      setScores(tempScores.reverse());
    }
    else {
      makeChoice(winner, loser);
    }
  }

  function getRandomChoices() {
    let first = Math.floor(Math.random() * (choices.length - 0) + 0);
    let second = Math.floor(Math.random() * (choices.length - 0) + 0);
    if (first != second) {
      setRandom1(first);
      setRandom2(second);
    }
    else {
      setRandom1(0);
      setRandom2(1);
    }
  }

  useEffect(() => {
    getRandomChoices();
  }, [])

  return (
    <div className="App">
      <div className="container" style={{ maxWidth: '800px', padding: '2rem 0' }}>
        <h1
          onClick={() => setGameStarted(!gameStarted)}>Choice Chooser</h1>
        <p className="lead">Choose and enter your Choices, then let Choice Chooser help Choose which Choice is best for you. Choice Chooser runs on Elo.</p>
        {
          gameStarted ?
            <div class="coupon">
              {
                error ?
                <Alert variant="light">
                  {errorMessage}
                </Alert>
                : ''
              }
              <Form>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Control type="text" placeholder="Enter a Choice" value={choice0}
                        onChange={(e) => setChoice0(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control type="text" placeholder="Enter a Choice" value={choice1}
                        onChange={(e) => setChoice1(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control type="text" placeholder="Enter a Choice" value={choice2}
                        onChange={(e) => setChoice2(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control type="text" placeholder="Enter a Choice" value={choice3}
                        onChange={(e) => setChoice3(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control type="text" placeholder="Enter a Choice" value={choice4}
                        onChange={(e) => setChoice4(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
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
                  </Col>
                </Row>
                <Button variant="dark"
                  onClick={() => startGame()}>
                  Submit
                </Button>
              </Form>
            </div>
            :
            <div className="row" style={{ minHeight: '100vh' }}>
              <div className="col">
                <Card
                  style={{ height: '400px', backgroundColor: '#111' }}
                  onClick={() => makeChoice(random1, random2)}
                >
                  <Card.Body
                    className="choice">
                    {choices[random1]}
                  </Card.Body>
                </Card>
              </div>
              <div className="col">
                <Card
                  style={{ height: '400px', backgroundColor: '#111' }}
                  onClick={() => makeChoice(random2, random1)}
                >
                  <Card.Body
                    className="choice">
                    {choices[random2]}
                  </Card.Body>
                </Card>
              </div>
              <div className="col">
                <Card
                  style={{ height: '400px'}}
                  className="scores">
                  <Card.Body
                    className="">
                    <div>
                      {
                        scores.map((i, index) => (
                          <div>
                            <p className="scores-text">{choices[index]}: {Math.round(scores[index] * 1000) / 100}</p>
                          </div>
                        ))
                      }
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
        }
      </div>
    </div>
  );
}

export default App;
