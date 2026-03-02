import './App.css';
import Card from './Card';

function App() {
    return (
        <div className="main">
            <div className='header'>
              <img src="src/assets/anteater.png" alt="" />
              <h1>Must try Restaurants near UCI</h1>
              <img src="src/assets/anteater.png" alt="" />
            </div>
            <div className="cards">
                <Card
                    image="src/assets/tenori.jpg"
                    image_alt="tenori_image"
                    title="Tenori"
                    description="Right in UTC, Yummy Onigiri!"
                />
                <Card
                    image="src/assets/eats_sushi.jpg"
                    image_alt="eats_sushi_image"
                    title="Eat's Sushi"
                    description="In Costa Mesa but worth the drive!"
                />
                <Card
                    image="src/assets/somi.jpg"
                    image_alt="somi_image"
                    title="Somi Somi"
                    description="Delicious Taiyaki Dessert"
                />
                <Card
                    image="src/assets/manaao.jpeg"
                    image_alt="manaao_image"
                    title="Manaao"
                    description="Great Thai food"
                />
                <Card
                    image="src/assets/photasia.jpeg"
                    image_alt="photasia_image"
                    title="Photasia"
                    description="Crazy good Pho"
                />
                <Card
                    image="src/assets/soup_shop.jpeg"
                    image_alt="soup_shop_image"
                    title="Soup Shop"
                    description="Good Pho, Open Super late, Free refills"
                />
                <Card
                    image="src/assets/Hiro.jpg"
                    image_alt="Hiro_image"
                    title="HiroNori"
                    description="Amazing Ramen"
                />
                <Card
                    image="src/assets/baekjeong.jpg"
                    image_alt="baekjeong_image"
                    title="Baekjeong"
                    description="Great KBBQ, Cooked for you to perfection"
                />
                <Card
                    image="src/assets/din.jpg"
                    image_alt="din_image"
                    title="Din Tai Fung"
                    description="Super good Dumplings and side dishes"
                />
                <Card
                    image="src/assets/aj.jpg"
                    image_alt="aj_image"
                    title="A & J Restaurant"
                    description="Homey Chinese Food, Great noodle soups"
                />
            </div>
        </div>
    );
}

export default App;
