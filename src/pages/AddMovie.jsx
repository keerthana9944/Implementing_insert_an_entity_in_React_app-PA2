import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddMovie = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title:"",
        director:"",
        genre:"",
        releaseYear:"",
        synopsis:"",
        posterUrl:""

    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Movie Submitted");
        navigate("/");
    };

    return(
        <div className="form-container" style={{maxWidth: '600px', margin: '0 auto', padding:'2rem'}}>
            <h2>Add a new movie</h2>
            <form onSubmit={handleSubmit}>
                <input
                name="title"
                placeholder="Title"
                onChange={handleChange}
                required/>

                <input 
                name="director"
                placeholder="Director"
                onChange={handleChange}
                required/>

                <select name="genre" onChange={handleChange} required>
                    <option value="">Select Genre</option>
                    <option>Action</option>
                    <option>Comedy</option>
                    <option>Drama</option>

                </select><br />
                <input 
                type="number" 
                name="year"
                placeholder="Release year"
                onChange={handleChange}
                required/> <br />

                <textarea
                name="synopsis"
                placeholder="Synopsis"
                onChange={handleChange}
                required/> <br />

                <input 
                type="url"
                name="poster"
                placeholder="Poster URL"
                onChange={handleChange}
                required/> <br />

                <button type="submit">Submit</button>
                <button type="button" onClick={() => navigate("/")}>Cancel</button>

            </form>

        </div>
    );
};

export default AddMovie;