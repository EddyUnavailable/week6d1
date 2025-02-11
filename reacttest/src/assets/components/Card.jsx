import Otter from "./Otter"
import ButtonList from "./ButtonList"
export default function Card() {
    // normal function that you have written inside should still
 //   follow the camelcase (upper lower case) syntax
    async function fetchData() {

    }
    return (
        <div>
            <p>This is my OtterInfo!</p>
            <Otter />
            <ButtonList />
        </div>
    )
}