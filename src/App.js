import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';
import { Component } from 'react';

class App extends Component { 
  hotels = [
    {
      id: 1,
      name: 'Zabytkowa Świątynia z możliwością noclegu',
      city: 'Uji - Japonia',
      rating: '8.8',
      price: "600 jenów",
      description: 'Niezależna świątynia buddyjska w Uji. Na terenie obiektu znajdują się dwie małe świątynie: Saishō-in należąca do sekty Tendai-shū i Jōdo-in do Jōdo-shū. Miejsce przechowywania wielu dzieł sztuki i jedna z największych atrakcji turystycznych rejonu Kioto.',
      image:''
    },
    {
      id: 2,
      name: '"Fallingwater" Dom',
      city: 'Mill Run - Stany Zjednoczone',
      rating: '9.8',
      price: "1,500 dolarów",
      description: 'Dom zaprojektowany przez amerykańskiego architekta Franka Lloyda Wrighta w 1935 roku w południowo-zachodniej Pensylwanii, ok. 110 km od Pittsburgha. Dom zbudowany został częściowo nad wodospadem na potoku Bear Run rzeki Youghiogheny. W roku 1963 został przekazany na cele publiczne i przekształcony w muzeum z możliwością wynajmu. Odwiedza go 120 000 gości rocznie.',
      image:''
    },
    {
      id: 3,
      name: 'Tradycyjna Chata',
      city: 'Tengenenge - Zimbabwe',
      rating: '2.1',
      price: "25 dolarów",
      description: 'Tradycyjna chata zbudowana w stylu ludu Tonga, znajdująca się niedaleko Zapory Kariba. Zapora i elektrownia wodna na rzece Zambezi tworzy jezioro Kariba w pasie granicznym pomiędzy Zambią i Zimbabwe. Jest jedną z największych zapór wodnych na świecie.',
      image:''
    },
  ]
  
  state = {
    hotels: this.hotels
  }

  searchHandler(term) {
    // console.log(term);
    const hotels = [...this.hotels].filter(x => x.name.toLowerCase().includes(term.toLowerCase()));
    this.setState({ hotels });
  }

  render () {
    return(
      <div className="App">
        <Header onSearch={(term) => this.searchHandler(term)}/>
        <Menu />
        <Hotels hotels={this.state.hotels} />
      </div>
    );
  }

}

export default App;
