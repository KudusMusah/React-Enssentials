import CoreConcept from "./CoreConcept/CoreConcepts";
import { CORE_CONCEPTS } from "../data";
import Section from "./Section";



export default function() {
    return (
        <Section id="core-concepts" title={"Core concepts"}>
            <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}
            </ul>
        </Section>
    )
}