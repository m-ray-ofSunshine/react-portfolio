function ContactForm() {

    return (
        <div>
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