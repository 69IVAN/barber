import { Agenda } from "../Agenda/Agenda"
export function Home() {
  return(

    <>
       <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 ">
              <img src="https://firebasestorage.googleapis.com/v0/b/barberiaam-96dc3.appspot.com/o/bannershop.jpg?alt=media&token=eeefb5ad-0e81-43c1-acc3-05e68533bd60" alt="bannershop" className="img-fluid w-100"/>
            </div>
            <div className="col-12 col-md-4">
              <Agenda/>
            </div>
          </div>
        </div>
       </section>
    </>
  )   

}