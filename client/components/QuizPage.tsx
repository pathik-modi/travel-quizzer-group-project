import { useParams } from 'react-router-dom'

export default function QuizPage() {
  return (
    <>
      <p>It&apos;s impossible to have a frog named, the laws forbid it</p>

      <div>
        <form>
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
            <p>Choose your Secondary Prefernce Preference</p>
            <input type="radio" name="atrTwo" value="Art" />
            <label htmlFor="Art">Art</label>
            <br />
            <input type="radio" name="atrTwo" value="Gambling" />
            <label htmlFor="Gambling">Gambling</label>
            <br />
            <input type="radio" name="atrTwo" value="Adventure" />
            <label htmlFor="Adventure">Adventure</label>
            <br />
            <input type="radio" name="atrTwo" value="Culture" />
            <label htmlFor="Culture">Culture</label>
          </div>
          <div>
            <p>Choose your Third Preference</p>
            <input type="radio" name="atrThree" value="Art" />
            <label htmlFor="Art">Art</label>
            <br />
            <input type="radio" name="atrThree" value="Gambling" />
            <label htmlFor="Gambling">Gambling</label>
            <br />
            <input type="radio" name="atrThree" value="Adventure" />
            <label htmlFor="Adventure">Adventure</label>
            <br />
            <input type="radio" name="atrThree" value="Culture" />
            <label htmlFor="Culture">Culture</label>
          </div>
        </form>
      </div>
    </>
  )
}
