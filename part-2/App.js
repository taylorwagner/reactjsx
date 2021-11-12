const App = () => (
    <div>
      <Tweet username="happy321" name="Happy" date="{new Date().toDateString()}" message="Fake Tweet!" />
      <Tweet username="yes300" name="Yes" date="new Date().toDateString()" message="Testing Components" />
      <Tweet username="bestever99" name="Best" date="new Date().toDateString()" message="Tweeting on Twitter Every Day" />
    </div>
)