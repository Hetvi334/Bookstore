import express from "express";
import { PORT , mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
//import { Book } from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express(); 



//Middlewarre for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
//app.use(cors());
// Option 2: Allow Custom Origins
app.use(cors());


app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To MERN Stack Tutorial');
  });

app.use('/books', booksRoute);


/*
// This are HTTP routes.For more modules we need separeate http routes which is not preffered...as it is not scalble
//Route for Save a Book  
app.post('/books', async (request,response) => {
    try{
        if(
            !request.body.title||
            !request.body.author||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message:'Send all required fields: title, author, publisYear',
            });
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear : request.body.publishYear,
        };
        const book = await Book.create(newBook);
        return response.status(201).send(book);
    }catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});  

//Route for Get All Books from Database
app.get('/books', async (request,response) => {
    try {
      const books =await Book.find({});  
      return response.status(200).json({
        count: books.length,
        data: books
      }); 
    } catch (error) {
      console.log(error.message);
      response.status(500).send({message: error.message});  
    }
});

//Route for Get All One Books from Database by Id
app.get('/books/:id', async (request,response) => {
    try {
      const { id } = request.params;        
      const book =await Book.findById(id);  
      return response.status(200).json(book);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({message: error.message});  
    }
});

//Route for Update a Books from Database by Id
app.put('/books/:id', async (request,response) => {
    try {
        if(
            !request.body.title||
            !request.body.author||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message:'Send all required fields: title, author, publisYear',
            });
        } 
        const { id } = request.params;
        const result = await Book.findByIdAndUpdate(id, request.body);

        if(!result){
            return response.status(404).json({ message: 'Book not found' });
        }
        return response.status(200).send({message: 'Book updated successfully' });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({message: error.message});  
    }
});

//Route for Delete a Books from Database by Id
app.delete('/books/:id', async (request,response) => {
    try {
      const { id } = request.params;

      const result = await Book.findByIdAndDelete(id);

      if(!result){
        return response.status(404).json({ message: 'Book not found' });
      }

      return response.status(200).send({message: 'Book deleted successfully' }); 

    }catch(error){
        console.log(error.message);
        response.status(500).send({ message: error.message});
    }
});
*/

//Refactor Http Routes with Express

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

  //.abc((...) => {...} )