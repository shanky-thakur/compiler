import React from "react";
import { useState } from "react";

const Editor = () => {
  const [code, setCode] = useState("//write some code here");
  const [result, setResult] = useState("//output here");
  const [lang, setLang] = useState("Java");
  const [mode, setMode] = useState("Light");

  const url = "https://code-compiler10.p.rapidapi.com/";

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-compile": "rapidapi",
      "Content-Type": "application/json",
      "X-RapidAPI-Key": "9887b3b350mshaa96a50c40296abp1a8799jsn3a8000797050",
      "X-RapidAPI-Host": "code-compiler10.p.rapidapi.com",
    },
    body: JSON.stringify({
      langEnum: [
        "php",
        "python",
        "c",
        "c_cpp",
        "csharp",
        "kotlin",
        "golang",
        "r",
        "java",
        "typescript",
        "nodejs",
        "ruby",
        "perl",
        "swift",
        "fortran",
        "bash",
      ],
      lang: `${lang}`,
      code: `${code}`,
      input: "",
    }),
  };

  const runCode = async () => {
    try {
      const response = await fetch(url, options);
      const answer = await response.text();
      setResult(answer);
    } catch (e) {
      setResult(e);
    }
  };

  function updateCode(e) {
    setCode(e.target.value);
  }

  function updateResult(e) {
    setResult(e.target.value);
  }

  function clearScreen() {
    setResult("//Output here");
  }

  function changeMode(e) {
    setMode(e.target.value);
  }

  function changeLang(e) {
    setLang(e.target.value);
  }

  return (
    <div className="pt-2">
      <div className="row bg-transparent">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card bg-transparent" style={{ border: "none" }}>
            <div className="card-body">
              <div
                className="card text-center bg-transparent"
                style={{ border: "none" }}
              >
                <div className="card-header">
                  <div className="row g-3">
                    <div className="col-sm-7">
                      <select
                        className="form-select"
                        id="autoSizingSelect"
                        onChange={changeLang}
                      >
                        <option defaultValue={"java"}>Java</option>
                        <option value="php">php</option>
                        <option value="python">Python</option>
                        <option value="c">C</option>
                        <option value="c_cpp">C++</option>
                        <option value="csharp">C#</option>
                        <option value="kotlin">kotlin</option>
                        <option value="golang">go</option>
                        <option value="r">R</option>
                        <option value="typescript">typescript</option>
                        <option value="nodejs">Node.js</option>
                        <option value="ruby">ruby</option>
                        <option value="perl">perl</option>
                        <option value="fortran">fortran</option>
                        <option value="bash">bash</option>
                      </select>
                    </div>
                    <div className="col-sm">
                      <button type="button" className="btn btn-danger disabled">
                        Main.class
                      </button>
                    </div>
                    <div className="col-sm">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={runCode}
                      >
                        Run <i className="bi bi-play-fill"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <textarea
                    type="text"
                    className="form-control"
                    value={code}
                    style={{
                      height: "100%",
                      color: mode === "Light" ? "black" : "white",
                      backgroundColor:
                        mode === "Dark"
                          ? "rgb(60, 60, 60)"
                          : "rgb(210, 210, 210)",
                    }}
                    rows={20}
                    onChange={updateCode}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card bg-transparent" style={{ border: "none" }}>
            <div className="card-body">
              <div
                className="card text-center bg-transparent"
                style={{ border: "none" }}
              >
                <div className="card-header">
                  <div className="row g-3">
                    <div className="col-sm-7">
                      <select
                        className="form-select"
                        id="autoSizingSelect"
                        onChange={changeMode}
                      >
                        <option defaultValue={"Light"}>Light</option>
                        <option value="Dark">Dark</option>
                      </select>
                    </div>
                    <div className="col-sm">
                      <button type="button" className="btn btn-danger disabled">
                        Output
                      </button>
                    </div>
                    <div className="col-sm">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={clearScreen}
                      >
                        Clear <i className="bi bi-arrow-clockwise"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <textarea
                    type="text"
                    className="form-control"
                    value={result}
                    style={{
                      color: mode === "Light" ? "black" : "white",
                      backgroundColor:
                        mode === "Dark"
                          ? "rgb(60, 60, 60)"
                          : "rgb(210, 210, 210)",
                      height: "100%",
                    }}
                    rows={20}
                    onChange={updateResult}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
