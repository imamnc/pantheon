import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React, { useEffect, useRef } from "react";
import CKEditorAdapter from "../utils/CKEditorAdapter";

// Define props
interface TextEditorProps {
    initContent?: string,
    onChange: (content: string) => void
}

// Declare document object type
declare const document: any;

const TextEditor: React.FC<TextEditorProps> = ({ initContent = '<p>Type here...</p>', onChange }) => {

    // Editor Ref
    const editorRef = useRef<any>(null)

    // Use effect
    useEffect(() => {
        // Handle Upload Image
        if (editorRef.current) {
            editorRef.current.plugins.get('FileRepository').createUploadAdapter = (loader: any) => {
                return new CKEditorAdapter(loader, '/ckeditor/upload', document.querySelector('meta[name="csrf-token"]').content);
            };
        }
    }, [])

    return <>
        <CKEditor
            editor={ClassicEditor}
            data={initContent}
            onReady={editor => {
                editorRef.current = editor
                console.log('Editor is ready to use!', editor);
            }}
            onChange={(event) => {
                onChange(editorRef.current.getData())
                console.log(editorRef.current.getData());
            }}
        />
    </>
}

export default TextEditor
