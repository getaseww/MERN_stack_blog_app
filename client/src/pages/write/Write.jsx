import "./write.css"
import { useState } from 'react'
import { Context } from "../../context/Context";
import { useContext } from 'react'
import { axiosInstance } from "../../config";
export default function Write() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const { user } = useContext(Context)
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPost = {
            username: user.username,
            title,
            desc,
        }
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
                await axiosInstance.post("/upload", data);
            } catch (err) {
                console.log("not success")
            }
        }
        try {
            var res = await axiosInstance.post("/post/create", newPost);
            if (res.status === 200) {
                window.location.replace("/post/" + res.data._id);
            } else {
                console.log("not success")
            }
        } catch (err) {

        }
    }
    return (
        <div className="write">
            {file && <img src={URL.createObjectURL(file)} alt={title} className="writeImg" />}
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <div className="inputImg">
                        <p className="fileInputLabel">Select Image</p>
                        <label htmlFor="fileInput">
                            <i className="writeIcon fas fa-plus"></i>
                        </label>
                    </div>
                    <input type="file" id="fileInput" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
                    <input type="text" placeholder="Title" name="" id="" className="writeInput" autoFocus={true} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="writeFormGroup">
                    <textarea name="" id="" cols="30" rows="10" type="text" className="writeInput writeText" placeholder="Write your description" onChange={e => setDesc(e.target.value)}></textarea>
                </div>
                <button className="writeSubmit" type="submit">Publish</button>
            </form>
        </div>
    )
}
