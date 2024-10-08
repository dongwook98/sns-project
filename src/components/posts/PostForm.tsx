import { FiImage } from 'react-icons/fi';

export default function PostForm() {
  const handleFileUpload = () => {};

  return (
    <form className='post-form'>
      <textarea
        className='post-form__textarea'
        name='content'
        id='content'
        placeholder='What is happening'
      ></textarea>
      <div className='post-form__submit-area'>
        <label htmlFor='file-input' className='post-form__file'>
          <FiImage className='post-form__file-icon' />
        </label>
        <input
          type='file'
          name='file-input'
          accept='image/*'
          className='hidden'
          onChange={handleFileUpload}
        />
        <input type='submit' value='Tweet' className='post-form__submit-btn' />
      </div>
    </form>
  );
}
