import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { CircularProgress } from "@mui/material";
import "./Modal.css"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  hright:500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: "12px",
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [productName, setproductName] = React.useState("");
  const [productPrice, setproductPrice] = React.useState("");
  const [productDesc, setproductDesc] = React.useState("");
  const [loader, setloader] = React.useState(false);

  const addTodo = async (e) => {
    e.preventDefault();
    // console.log("productName", productName);
    // console.log("productPrice", productPrice);
    // console.log("productDesc", productDesc);
    
    
    try {
      setloader(true);
      const docRef = await addDoc(collection(db, "products"), { // firebase pa data save karna ka lia
        productName,
        productPrice,
        productDesc,
      });

      setloader(false);
      handleClose();
      
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      setloader(false);

      console.log(error);
      alert(error.message);
    }
  };
  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Add Product
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box sx={{ borderBottom: "1px solid black" }}>
            <h1 className="heading">Add Your Product</h1>
            </Box>
            <Box component={"form"} onSubmit={addTodo}>
              
              <input
                type="text"
                placeholder="Product Name"
                onChange={(e) => setproductName(e.target.value)}   
              />

              <input
                type="text"
                placeholder="Product Price"
                onChange={(e) => setproductPrice(e.target.value)}
              />
              <input type="file" />

              <textarea
                type="text"
                placeholder="Product Desc"
                onChange={(e) => setproductDesc(e.target.value)}
              />
              <Box sx={{ display: "flex", justifyContent: "end", gap: "10px" }}>
                <Button variant="contained" type="submit">
                  {loader ? (
                    <CircularProgress size={"18px"} sx={{ color: "white" }} />
                  ) : (
                    "Add"
                  )}
                </Button>
                <Button onClick={handleClose} variant="contained" color="error">
                  CLOSE
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}