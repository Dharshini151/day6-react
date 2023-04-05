import './App.css';
import Productlist from './Component/Product';

function App() {

  return (
    <div className="App">
      <Productlist products={[{no:"1",name:"Jack Danil", price:"21,000", imageUrl:"https://www.topgear.com/sites/default/files/2023/03/ind-my23-4f70-jd-le-chief-bobber-bike-lg.jpg"},{no:"2",name:"Royal Enfield", price:"70,00,000", imageUrl:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201809/Classic-500-Stealth-Black_1.jpeg?size=1200:675"},{no:"3",name:"KTM", price:"21,000", imageUrl:"https://www.reviewsxp.com/blog/wp-content/uploads/2017/01/ktm-bike-477x263.jpg"}]}/>
    </div>
  );
}

export default App;
