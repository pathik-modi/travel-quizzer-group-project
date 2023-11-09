import { useParams } from 'react-router-dom'

export default function QuizPage() {
  function handleFormSubmit(event: any) {
    event.preventDefault()
    const target = event.currentTarget
    const form = new FormData(target)
    const atrOne = form.get('atrOne')?.valueOf() as string
    const atrTwo = form.get('atrTwo')?.valueOf() as string
    const atrThree = form.get('atrThree')?.valueOf() as string

    const userInput = {
      atrOne,
      atrTwo,
      atrThree,
    }
    console.log(userInput)
  }

  return (
    <>
      <div>
        <form onSubmit={handleFormSubmit}>
          <div className="quizForm">
            <div>
              <p>Choose your main Preference</p>
              <input type="radio" name="atrOne" value="Art" />
              <label htmlFor="Art">Art</label>
              <br />
              <input type="radio" name="atrOne" value="Gambling" />
              <label htmlFor="Gambling">Gambling</label>
              <br />
              <input type="radio" name="atrOne" value="Adventure" />
              <label htmlFor="Adventure">Adventure</label>
              <br />
              <input type="radio" name="atrOne" value="Culture" />
              <label htmlFor="Culture">Culture</label>
            </div>
            <div>
              <p>Choose your Secondary Prefernce</p>
              <input type="radio" name="atrTwo" value="Beaches" />
              <label htmlFor="Beaches">Beaches</label>
              <br />
              <input type="radio" name="atrTwo" value="luxury" />
              <label htmlFor="luxury">luxury</label>
              <br />
              <input type="radio" name="atrTwo" value="Shopping" />
              <label htmlFor="Shopping">Shopping</label>
              <br />
              <input type="radio" name="atrTwo" value="Budget Friendly" />
              <label htmlFor="Budget Friendly">Budget Friendly</label>
            </div>
            <div>
              <p>Choose your Third Preference</p>
              <input type="radio" name="atrThree" value="Wine Tasting" />
              <label htmlFor="Wine Tasting">Wine Tasting</label>
              <br />
              <input type="radio" name="atrThree" value="Fine Dining" />
              <label htmlFor="Fine Dining">Fine Dining</label>
              <br />
              <input type="radio" name="atrThree" value="Culture" />
              <label htmlFor="Culture">Culture</label>
              <br />
              <input type="radio" name="atrThree" value="Romantic" />
              <label htmlFor="Romantic">Romantic</label>
            </div>
          </div>
          <br />
          <div>
            <button className="centerButton">Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}
