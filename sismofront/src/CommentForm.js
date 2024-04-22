import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './CommentForm.css';

const CommentForm = () => {
  const [body, setBody] = useState('');
  const navigate = useNavigate();
  const { id } = useParams(); // Extrae featureId de los parametros de URL

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      if (!id) {
        console.error('Feature ID is undefined');
        return;
      }

      // revisa si el body esta vacio
      if (!body.trim()) {
        console.error('Comment body cannot be empty');
        return;
      }

      const response = await axios.post(`http://localhost:3000/api/features/${id}/comments`, {
        body: body
      });
      console.log('Comment submitted successfully:', response.data);
      
      // Redirige a la pagina inicial (http://localhost:3001)
      navigate('/');
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  
  const handleBodyChange = event => {
    setBody(event.target.value);
  };

  // deshabilitar el boton si el comentario esta vacio
  const isSubmitDisabled = !body.trim();

  return (
    <div className="comment-form">
      <h2>Agregar Comentario</h2>
      <form onSubmit={handleSubmit}>
        <textarea value={body} onChange={handleBodyChange} />
        <button type="submit" disabled={isSubmitDisabled}>Enviar</button>
      </form>
    </div>
  );
};

export default CommentForm;
