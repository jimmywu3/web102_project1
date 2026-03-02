import './App.css'
import Card from './Card'

function App() {
  return (
    <div className='main'>
      <h1>Must try Restaurants near UCI</h1>
      <div className='cards'>
        <Card image="src/assets/cats_dogs.jpg" image_alt="" title="Cats and dogs" description="pow!"/>
        <Card image="src/assets/cats_dogs.jpg" image_alt="" title="" description=""/>
        <Card image="src/assets/cats_dogs.jpg" image_alt="" title="" description=""/>
        <Card image="src/assets/cats_dogs.jpg" image_alt="" title="" description=""/>
        <Card image="src/assets/cats_dogs.jpg" image_alt="" title="" description=""/>
        <Card image="src/assets/cats_dogs.jpg" image_alt="" title="" description=""/>
        <Card image="src/assets/cats_dogs.jpg" image_alt="" title="" description=""/>
        <Card image="src/assets/cats_dogs.jpg" image_alt="" title="" description=""/>
        <Card image="src/assets/cats_dogs.jpg" image_alt="" title="" description=""/>
        <Card image="src/assets/cats_dogs.jpg" image_alt="" title="" description=""/>
      </div>
    </div>
  )
}

export default App
