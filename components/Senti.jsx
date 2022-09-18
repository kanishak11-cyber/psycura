import React, { useState, useEffect } from 'react'
import * as tf from '@tensorflow/tfjs';
import padSequences from '../components/helper/paddenSeq'
import Emoji from 'a11y-react-emoji'
const Senti = ({}) => {

  const url = {

    model: 'https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/model.json',
    metadata: 'https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/metadata.json'
  };

  const OOV_INDEX = 2;

  const [metadata, setMetadata] = useState();
  const [model, setModel] = useState();
  const [testText, setText] = useState("");
  const [testScore, setScore] = useState("");
  const [trimedText, setTrim] = useState("")
  const [seqText, setSeq] = useState("")
  const [padText, setPad] = useState("")
  const [inputText, setInput] = useState("")


  async function loadModel(url) {
    try {
      const model = await tf.loadLayersModel(url.model);
      setModel(model);
    } catch (err) {
      console.log(err);
    }
  }

  async function loadMetadata(url) {
    try {
      const metadataJson = await fetch(url.metadata);
      const metadata = await metadataJson.json();
      setMetadata(metadata);
    } catch (err) {
      console.log(err);
    }
  }


  const getSentimentScore = (text) => {
    console.log(text)
    const inputText = text.trim().toLowerCase().replace(/(\.|\,|\!)/g, '').split(' ');
    setTrim(inputText)
    console.log(inputText)
    const sequence = inputText.map(word => {
      let wordIndex = metadata.word_index[word] + metadata.index_from;
      if (wordIndex > metadata.vocabulary_size) {
        wordIndex = OOV_INDEX;
      }
      return wordIndex;
    });
    setSeq(sequence)
    console.log(sequence)
    // Perform truncation and padding.
    const paddedSequence = padSequences([sequence], metadata.max_len);
    console.log(metadata.max_len)
    setPad(paddedSequence)

    const input = tf.tensor2d(paddedSequence, [1, metadata.max_len]);
    console.log(input)
    setInput(input)
    const predictOut = model.predict(input);
    const score = predictOut.dataSync()[0];
    predictOut.dispose();
    setScore(score)
    return score;
  }

  function whenTyping(e) {
    setText(e.target.value);
    getSentimentScore(testText)
  }

  useEffect(() => {
    tf.ready().then(
      () => {
        loadModel(url)
        loadMetadata(url)
      }
    );

  }, [])
  return (
    <div className='flex'>
      <textarea
        id="standard-read-only-input"
        label="Type a sentence here"
        onChange={(e) => whenTyping(e)}
        defaultValue=""
        fullWidth
        className='bg-transparent border w-full h-screen'
        value={testText}
        variant="outlined"
        height={2000}
      ></textarea>
      <br />
<div>

      {testScore > 0.6 ? <><h1 className='text-5xl' >
        <Emoji symbol="😀" label="Happy" />
      </h1></> : <></>}
      {testScore < 0.4 && testScore !== "" ? <><h1 className='text-5xl'>
        <Emoji symbol="🙁" label="Sad" />
      </h1></> : <></>}
      {(testScore > 0.4 && testScore < 0.6) || testScore == "" ? <><h1 className='text-5xl'>
        <Emoji symbol="😐" label="Neutral" />
      </h1></> : <></>}

</div>
    </div>
  )
}

export default Senti