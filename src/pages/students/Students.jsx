import React, { useEffect } from "react";
import { AppLayout } from "../../layouts/appLayout";
import {
  Alert,
  Button,
  Container,
  Grid,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // form control all state
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

<<<<<<< HEAD
  let studentInfoForSumbut = {
    name: name,
    age: age,
    city: city,
  };

  // handleSubmit for submit all data in database
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/add`, studentInfoForSumbut)
      .then((response) => {
        setMessage(response.data.message);
        fetchStudents();
        setName("");
        setAge("");
        setCity("");
      })
      .catch((err) => console.log(err.message));
  };
=======
  const [images, setImages] = useState([]);
>>>>>>> e695b829de964c4dcfa7d0ea97a2f5d5e7b084bf

  useEffect(() => {
    fetchStudents();
  }, []);

<<<<<<< HEAD
=======
  const handleImageChange = (e) => {
    const fileList = e.target.files;
    setImages([...images, ...fileList]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    images.forEach((image, index) => {
      formData.append(`images`, image);
    });

    formData.append("name", name);
    formData.append("age", age);
    formData.append("city", city);

    try {
      await axios
        .post("http://localhost:5050/api/add", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => setMessage(res.message));
      fetchStudents();
      console.log("Data uploaded successfully");
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };

>>>>>>> e695b829de964c4dcfa7d0ea97a2f5d5e7b084bf
  const fetchStudents = () => {
    // fetch data use api endpoint 'api/students' use axios
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/students`)
      .then((response) => {
        setStudents(response.data.students);
      })
      .catch((err) => console.log(err));
  };

  // handle delete
  const handleDelete = (id) => {
<<<<<<< HEAD
    axios.delete(`${process.env.REACT_APP_BASE_URL}/delete/${id}`,)
      .then((response) => {
        setMessage(response.data.message);
        fetchStudents(); 
=======
    axios
      .delete(`${process.env.REACT_APP_BASE_URL}/delete/${id}`)
      .then((response) => {
        setMessage(response.data.message);
        fetchStudents();
>>>>>>> e695b829de964c4dcfa7d0ea97a2f5d5e7b084bf
      })
      .catch((err) => console.log(err));
  };

  // handle edit
  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
<<<<<<< HEAD
    
  }
  
=======
  };

>>>>>>> e695b829de964c4dcfa7d0ea97a2f5d5e7b084bf
  return (
    <AppLayout>
      <Container maxWidth={"xl"}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} sx={{ p: 20 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
              Student Form
            </Typography>

            {message && <Alert severity="success">{message && message}</Alert>}
            <form onSubmit={(e) => handleSubmit(e)}>
              <TextField
                id="outlined-basic"
                fullWidth
                sx={{ mt: 3 }}
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                fullWidth
                sx={{ mt: 3 }}
                label="Age"
                variant="outlined"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
<<<<<<< HEAD
=======
              <input type="file" multiple onChange={handleImageChange} />
              {images.map((image, index) => (
                <img
                  style={{ width: "100px" }}
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  key={index}
                />
              ))}

>>>>>>> e695b829de964c4dcfa7d0ea97a2f5d5e7b084bf
              <TextField
                id="outlined-basic"
                fullWidth
                sx={{ mt: 3 }}
                label="City"
                variant="outlined"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <Button
                variant="contained"
                fullWidth
                type="submit"
                color="primary"
                size="large"
                sx={{ my: 3 }}
              >
                Submit
              </Button>
            </form>
          </Grid>
          <Grid item xs={12} md={6} sx={{ bgcolor: "#f5f5f5" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
              Student List
            </Typography>
            <table>
              <thead>
                <tr>
                  <th style={{ padding: "10px" }}>Name</th>
                  <th style={{ padding: "10px" }}>Age</th>
                  <th style={{ padding: "10px" }}>City</th>
<<<<<<< HEAD
=======
                  <th style={{ padding: "10px" }}>image</th>
>>>>>>> e695b829de964c4dcfa7d0ea97a2f5d5e7b084bf
                  <th style={{ padding: "10px" }}>Action</th>
                </tr>
              </thead>
              <tbody>
<<<<<<< HEAD
                {students.map((student, index ) => (
=======
                {students.map((student, index) => (
>>>>>>> e695b829de964c4dcfa7d0ea97a2f5d5e7b084bf
                  <tr key={index}>
                    <td style={{ padding: "10px" }}>{student.name}</td>
                    <td style={{ padding: "10px" }}>{student.age}</td>
                    <td style={{ padding: "10px" }}>{student.city}</td>
                    <td style={{ padding: "10px" }}>
<<<<<<< HEAD
=======
                      <img
                        style={{ width: "100px" }}
                        src={`${process.env.REACT_APP_BASE_URL}/${student.images[0]}`}
                        alt="Preview"
                      />
                    </td>
                    <td style={{ padding: "10px" }}>
>>>>>>> e695b829de964c4dcfa7d0ea97a2f5d5e7b084bf
                      <Button
                        onClick={() => handleEdit(student._id)}
                        variant="contained"
                        size="small"
                        sx={{
                          marginRight: "10px",
                          cursor: "pointer",
                          textTransform: "capitalize",
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => handleDelete(student._id)}
                        variant="contained"
                        size="small"
                        color="secondary"
                        sx={{ cursor: "pointer", textTransform: "capitalize" }}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Grid>
        </Grid>
      </Container>
    </AppLayout>
  );
};

export default Students;
