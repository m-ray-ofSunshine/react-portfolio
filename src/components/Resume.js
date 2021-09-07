function Resume() {

    return (
        <div id="resume" className="row justify-content-center"
        style={{
            backgroundColor: 'rgba(151, 173, 198, 0.6)',
           
            borderRadius: "10px",
            marginBottom: "15vh"
        }}>
            <h2 className="p-2">Resume</h2>
            <iframe id="embedResume" title="resume" src="https://docs.google.com/document/d/e/2PACX-1vRnicrCfnB27wMHJBI_NttEy1dJ_Lz5YU8PY8-7JXSI5zQOe7T-IYXjxo3cMF2lJQ/pub?embedded=true"    ></iframe>
            <a href="https://drive.google.com/file/d/157HIt4XCW6OWbrxSLGEoaU9v2KO86Nyd/view?usp=sharing" rel="noreferrer" target="_blank" alt="link to pdf"><button id="newTab" type="button" className="m-2 w-50 btn btn-primary" >Open in a new tab</button></a>
            
        </div>

    )
}
export default Resume;