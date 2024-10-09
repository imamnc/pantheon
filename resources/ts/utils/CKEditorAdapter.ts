class CKEditorAdapter {

    loader: any;
    url: string;
    csrf_token: any | null;

    constructor(loader: any, url: string, crsf_token: any) {
        this.loader = loader;
        this.url = url;
        this.csrf_token = crsf_token;
    }

    upload() {
        return new Promise(async (resolve, reject) => {
            const data = new FormData();
            data.append('image', await this.loader.file);

            fetch(this.url, {
                method: 'POST',
                body: data,
                headers: {
                    'X-CSRF-TOKEN': this.csrf_token
                }
            }).then((response) => response.json()).then((data) => {
                if (data.success) {
                    resolve({ default: data.url });
                } else {
                    reject(data.error.message);
                }
            }).catch((error) => reject(error.message));
        });
    }
}

export default CKEditorAdapter;
