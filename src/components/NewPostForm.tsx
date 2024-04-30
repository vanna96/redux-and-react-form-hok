import { createPost } from '@/api/postSlice';
import { AppDispatch } from '@/app/store';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

interface FormData {
    title: string;
    body: string;
}

function NewPostForm() {
    const { register, handleSubmit, reset } = useForm<FormData>();
    const dispatch = useDispatch<AppDispatch>();

    const onSubmit = handleSubmit((data) => {
        dispatch(createPost(data));
        reset();
    });

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="title">Title:</label>
            <input id="title" {...register('title', { required: true })} />
            <label htmlFor="body">Body:</label>
            <textarea id="body" {...register('body', { required: true })} />
            <button type="submit">Create Post</button>
        </form>
    );
}

export default NewPostForm;
