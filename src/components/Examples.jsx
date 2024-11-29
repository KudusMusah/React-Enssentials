import { useState } from "react";

import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";


export default function() {
    const [selectedContent, setSelectedContent] = useState("");

    function handleSelect(selected) {
        setSelectedContent(selected);
    }

    const buttons = <>
        <TabButton isSelected={selectedContent == "components"} onClick={() => handleSelect("components")}>
            components
        </TabButton>
        <TabButton isSelected={selectedContent == "props"} onClick={() => handleSelect("props")}>props</TabButton>
        <TabButton isSelected={selectedContent == "jsx"} onClick={() => handleSelect("jsx")}>jsx</TabButton>
        <TabButton isSelected={selectedContent == "state"} onClick={() => handleSelect("state")}>state</TabButton>
    </>

    return (
        <Section id="examples" title={"Examples"} >
            <Tabs buttons={buttons}>
                {!selectedContent ? <div id="tab-content"><p>Please Select a Topic</p></div> : 
                    <div id="tab-content">
                        <h3>{EXAMPLES[selectedContent].title}</h3>
                        <p>{EXAMPLES[selectedContent].description}</p>
                        <pre>
                            <code>
                            {EXAMPLES[selectedContent].code}
                            </code>
                        </pre>
                    </div>
                }
            </Tabs>

            
        </Section>
    )
}