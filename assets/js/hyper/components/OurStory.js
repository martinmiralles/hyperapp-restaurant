import { h, app } from "hyperapp";

export default function OurStory({ state, actions }) {
  return (
    <section id='OurStory'>
      <div class='container'>
        <div class='row'>
          <div class='col-md-6 col-sm-12'>
            <h5 class='comp-title'>Our Story</h5>
            <h2>The chicken wing,</h2>
            <h2>is our thing</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              illum assumenda non, quis modi tempora ullam reprehenderit illo
              eaque dolorum, cupiditate animi perspiciatis a quas corrupti,
              nesciunt laboriosam! Consectetur, cupiditate minima soluta
              assumenda eum nisi aliquid at dolore nam quae tempore excepturi
              dolorum, ad pariatur!
            </p>
            <div class='quote'>
              "Best wings in town!" - <strong>Martin Miralles</strong>
            </div>
            <a href='#' class='reserve-btn'>
              Reserve
            </a>
          </div>
          <div class='col-md-6 col-sm-12'>
            <div class='video-img'></div>
          </div>
        </div>
      </div>
    </section>
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
