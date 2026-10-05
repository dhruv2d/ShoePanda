function Contact(){
    return <div className="contact">
        <h2 className="contact-heading">Contact Us</h2>
        <p className="non-important-p">Have questions about your order or products? We're here to help.</p>
        <div className="contact-details">
        <p className="important-p">Email : <strong>shoepanda.shop@gmail.com</strong></p>
        <p className="important-p">Phone : <strong>+91 9847382955</strong></p>
        <p className="important-p">Address : <strong>Delhi, India</strong></p>
        </div>

            <p className="non-important-p">We usually reply within 24 hours</p>
        <div className="contact-follow">
            <p className="important-p"><strong>Follow us : </strong></p>
            <p className="important-p" style={{textAlign: "center" ,whiteSpace: "pre"}}>Instagram  |  LinkedIn  |  Twitter</p>
        </div>
        {/* <Footer></Footer> */}
    </div>
}

export default Contact;