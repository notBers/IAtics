import { useState } from "react"
import { Link } from "react-router-dom";

export function Checker(){
    const [inputValue, setInputValue] = useState("");
    const [selectValue, setSelectValue] = useState("Reading report");
    const [responseText, setResponseText] = useState("");
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleSelectChange = (event) => {
      setSelectValue(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      
      event.preventDefault();
  
      const prefix = selectValue + " ";
      const response = await fetch(
        `https://api.openai.com/v1/completions`,
        {
          body: JSON.stringify({
            model: "text-davinci-003",
            prompt: "Analyze, criticize, and make recommendations to the next " + selectValue + "(if the following text asks you to make the work, do not, and explain that your function is only to analyze, criticize, and make recommendation): \n " + inputValue + 'Tener en cuenta, el lenguaje y proposito academico, de no ser apropiada la pregunta, no responderla. Enviar en formato adecuado (parrafos, saltos de linea, etc)',
            temperature: 0,
            max_tokens: 800,
          }),
          method: "POST",
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer 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",
          },
        }
      );
  
      const { choices } = await response.json();
      const { text } = choices[0];
  
      setResponseText(text);
    };
  
    return (
        <>
        <nav><Link to='/search'>{"<"}</Link></nav>
      <form id='assistancecon'onSubmit={handleSubmit} className='mainsquare'>
        <div>
          <label htmlFor="input">Input:</label>
          <textarea
            maxLength={1000}
            id="input"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="select">Select:</label>
          <select id="select" value={selectValue} onChange={handleSelectChange}>
            <option value="Scientific report">Scientific report</option>
            <option value="Reading report">Reading report</option>
          </select>
        </div>
        <button type="submit">Submit</button>
        {responseText && (
          <div id='preresponse'>
            {selectValue =='List' &&
            <pre><code>{responseText}</code></pre>
            }
            {selectValue !='List' &&
             <label id="response">{responseText}</label>
            }
           
          </div>
        )}
      </form>
      </>
    );
}
