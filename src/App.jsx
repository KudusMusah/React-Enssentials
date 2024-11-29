import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcepts/CoreConcepts";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
  const [selectedContent, setSelectedContent] = useState("");

  function handleSelect(selected) {
    setSelectedContent(selected);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}
          </ul>
        </section>
        <section id="examples">
          <h2>Examles</h2>
          <menu>
            <TabButton isSelected={selectedContent == "components"} handleSelect={() => handleSelect("components")}>
              components
            </TabButton>
            <TabButton isSelected={selectedContent == "props"} handleSelect={() => handleSelect("props")}>props</TabButton>
            <TabButton isSelected={selectedContent == "jsx"} handleSelect={() => handleSelect("jsx")}>jsx</TabButton>
            <TabButton isSelected={selectedContent == "state"} handleSelect={() => handleSelect("state")}>state</TabButton>
          </menu>
          {!selectedContent ? <div id="tab-content"><p>Please Select a Topic</p></div> : <div id="tab-content">
            <h3>{EXAMPLES[selectedContent].title}</h3>
            <p>{EXAMPLES[selectedContent].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedContent].code}
              </code>
            </pre>
          </div>}
        </section>
      </main>
    </div>
  );
}

export default App;
