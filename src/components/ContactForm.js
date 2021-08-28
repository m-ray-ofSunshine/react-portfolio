function ContactForm() {

    return (
        <div className="" style={{
            backgroundColor: 'rgba(151, 173, 198, 0.6)',
            width: "50vw",
            borderRadius: "10px",
            marginBottom:"35vh"
            

        }}>
            <div className="mb-3">
                <label  className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="name@example.com"></input>
            </div>
            <div className="mb-3">
                <label  className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="3"></textarea>
            </div>
            <input className="btn btn-primary" type="submit" value="Submit"></input>
        </div>

    )
}
export default ContactForm;