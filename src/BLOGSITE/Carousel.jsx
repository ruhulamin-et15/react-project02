import React, { Component } from 'react'
import Style from './Blog.module.css'
import "./Carousel.css";

class Carousel extends Component {
  constructor(props){
    super(props)
    this.state={
      ShortTitle: {
        Stitle1: "Lorem ipsum dolor sit amet1.",
        Stitle2: "Lorem ipsum dolor sit amet2.",
        Stitle3: "Lorem ipsum dolor sit amet3."
      },
      LongTitle: {
        Ltitle1: "Live With Ruhul Amin",
        Ltitle2: "Live With Ruhul Amin2",
        Ltitle3: "Live With Ruhul Amin3"
      },
      ParaGraph: {
        P1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque aspernatur dolorem qui minus neque adipisci eos soluta asperiores quaerat temporibus dolore deserunt repellat quae, non rem eveniet esse optio reiciendis officia! Tempora quam cupiditate vel numquam ratione dolor eum, exercitationem tenetur mollitia! Maiores itaque molestiae voluptatum dolor officiis quaerat provident?11",
        P2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque aspernatur dolorem qui minus neque adipisci eos soluta asperiores quaerat temporibus dolore deserunt repellat quae, non rem eveniet esse optio reiciendis officia! Tempora quam cupiditate vel numquam ratione dolor eum, exercitationem tenetur mollitia! Maiores itaque molestiae voluptatum dolor officiis quaerat provident?22",
        P3: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque aspernatur dolorem qui minus neque adipisci eos soluta asperiores quaerat temporibus dolore deserunt repellat quae, non rem eveniet esse optio reiciendis officia! Tempora quam cupiditate vel numquam ratione dolor eum, exercitationem tenetur mollitia! Maiores itaque molestiae voluptatum dolor officiis quaerat provident?33"
      },
      ChannelName: {
        CN1:"Ruhul Amin",
        CN2:"Ruhul Amin2",
        CN3:"Ruhul Amin3"
      },
      Date:{
        Date1:"06/07/2023",
        Date2:"06/07/2023",
        Date3:"06/07/2023"
      }
    }
  }
  render() {
    return (
        <div>
        <div id="carouselExampleFade" class="carousel slide carousel-fade border border-light shadow">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className='row'>
              <div className='col-md-6'>
                <img src="img/IMG_20190727_173615.jpg" class="d-block w-100" alt="..."/>
              </div>
              <div className='col-md-6'>
                <p className={Style.ShortTitle}>{this.state.ShortTitle.Stitle1}</p>
                <h3 className={Style.LongTitle}>{this.state.LongTitle.Ltitle1}</h3>
                <p className={Style.ShortTitle}>{this.state.ParaGraph.P1}</p>
                <p className={Style.ChannelName}>{this.state.ChannelName.CN1}</p>
                <p className={Style.ShortTitle}>{this.state.Date.Date1}</p>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div className='row'>
              <div className='col-md-6'>
                <img src="img/IMG_20220202_150354.jpg" class="d-block w-100" alt="..." />
              </div>
              <div className='col-md-6'>
                <p className={Style.ShortTitle}>{this.state.ShortTitle.Stitle2}</p>
                <h3 className={Style.LongTitle}>{this.state.LongTitle.Ltitle2}</h3>
                <p className={Style.ShortTitle}>{this.state.ParaGraph.P2}</p>
                <p className={Style.ChannelName}>{this.state.ChannelName.CN2}</p>
                <p className={Style.ShortTitle}>{this.state.Date.Date2}</p>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div className='row'>
              <div className='col-md-6'>
                <img src="img/IMG_20230427_192416.jpg" class="d-block w-100" alt="..." />
              </div>
              <div className='col-md-6'>
                <p className={Style.ShortTitle}>{this.state.ShortTitle.Stitle3}</p>
                <h3 className={Style.LongTitle}>{this.state.LongTitle.Ltitle3}</h3>
                <p className={Style.ShortTitle}>{this.state.ParaGraph.P3}</p>
                <p className={Style.ChannelName}>{this.state.ChannelName.CN3}</p>
                <p className={Style.ShortTitle}>{this.state.Date.Date3}</p>
              </div>
            </div>
          </div>   
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
    
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
    
        </button>
      </div>
      <h2 className='mt-5 ms-1'>Recent Posts</h2>
      </div>
      
      
      
    )
  }
}

export default Carousel;