import React from 'react'
import Card from './Card'


const CardSection =()=>{
    return(
       <section className="contact bg-success">
           <div className="container">
                <h2 className = "text-white" > 
                  We Love Technology.
                </h2>
                   <div className="row">
                    <Card cardImage={<img 
                    src="https://images.pexels.com/photos/1029606/pexels-photo-1029606.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    className="card-img-top"
                    alt="..."
                    />}
                    cardTitle="Declarative" cardDescription="React makes it painless to create interactive UIs. Design 
                    simple views for each state in your application, and React will efficiently update and render 
                    just the right components when your datachanges.Declarative views make your code more predictable 
                    and easier to debug." buttonText="Learn more.." />

                    <Card cardImage={<img 
                    src="https://images.pexels.com/photos/2249964/pexels-photo-2249964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    className="card-img-top"
                    alt="..."
                    />}
                    cardTitle="Component-Based" cardDescription="Build encapsulated components that manage their 
                    own state, then compose them to make complex UIs.Since component logic is written in JavaScript 
                    instead of templates, you can easily pass rich data through your app and keep state out of the DOM." 
                    buttonText="Learn more.." />

                    <Card cardImage={<img 
                    src=" https://images.pexels.com/photos/532173/pexels-photo-532173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    className="card-img-top"
                    alt="..."
                    />}
                    cardTitle="Learn Once, Write Anywhere" cardDescription="We don’t make assumptions about the rest of
                    your technology stack, so you can develop new features in React without rewriting existing code React can 
                    also render on the server using Node and power mobile apps using React Native." buttonText="Learn more.." />
                </div>
            </div>

      </section>
    )
}

export default CardSection