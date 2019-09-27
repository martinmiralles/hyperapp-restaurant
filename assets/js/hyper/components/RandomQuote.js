import { h, app } from "hyperapp";

export default function RandomQuote({ state, actions }) {
  return (
    <section
      id='RandomQuote'
      style={{
        backgroundImage:
          'linear-gradient(135deg, rgba(0, 0, 0, .2) 0, #000 100%), url("https://res.cloudinary.com/simplotel/image/upload/x_-1,y_0,w_1249,h_625,r_0,c_crop,q_60,fl_progressive/w_1249,f_auto,c_fit/colonels-retreat/Treat,Colonels_Retreat,_Cooking_Classes_in_Delhi_1")'
      }}
    >
      <div class='container'>
        <h1>"I love their flavours"</h1>
        <span class='author'> -Random Customer- </span>
      </div>
    </section>
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
