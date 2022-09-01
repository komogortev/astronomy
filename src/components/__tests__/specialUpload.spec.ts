import { describe, it, test, expect } from "vitest"
import { render, screen, fireEvent } from '@testing-library/vue'
import SpecialUpload from "../special-upload.vue"

describe("specialUpload", async () => {
  // setup
  const inputTitle: string = 'fileUpload'
  const filePath = "https://source.unsplash.com/random"
  const imagePreviewId = 'image-preview'

  // prepare file data transfer to pass into input
  const fileString: string = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==';
  let blob = await fetch(fileString).then(res => {
    return res.blob();
  });
  let file = new File([blob], "sample.jpg", { type: 'image/png' })


  // @params blob - The ClipboardItem takes an object with the MIME type as key, and the actual blob as the value.
  // @return Promise<void>
  const setToClipboard = async (blob: Blob) => {
    // const clipboardItems = await navigator.clipboard.read();

    // for (const clipboardItem of clipboardItems) {

    //   for (const type of clipboardItem.types) {
    //     let blob = await clipboardItem.getType(type);
    //     // we can now use blob here
    //     blob = await fetch(fileString).then(res => {
    //       return res.blob();
    //     });
    //   }

    // }

    // await navigator.clipboard.write(clipboardItems)
  }

  describe('ProfileImageForm', () => {


    it('makes a call to persist the image on image upload', async () => {
      render(SpecialUpload, {
        props: {
          customImg: filePath,
        },
      })

      // https://testing-library.com/docs/dom-testing-library/api-events/#createeventeventname
      // start call to api, return mock data, render data, test rendered data
      // const input: HTMLInputElement = await screen.findByTitle(inputTitle)
      const imagePreview: HTMLImageElement = await screen.findByAltText(imagePreviewId)
      // add the FileList to the file input element
      //let $fileElement = document.getElementById('file-upload') as HTMLInputElement;
      // const dT = new DataTransfer();
      // dT.items.add(new File(['test'], fileString));
      // $fileElement.files = dT.files;
      // let changeEvent = new Event('change');
      // simulate the 'input' event on a file input
      // fireEvent[eventName](node: HTMLElement, eventProperties: Object)
      // fireEvent.change(
      //   $fileElement, { target: { value: filePath } }
      // )
      // *note: attempting to manually set the files property of an HTMLInputElement
      // results in an error as the files property is read-only.
      // this feature works around that by using Object.defineProperty.
      // emit the change event so that your UI can respond to the file upload.
      // $fileElement.dispatchEvent(changeEvent);
      // changeEvent.target.value = file
      // assert file processing took place and preview shows image

      expect(imagePreview.src).toBe(filePath)
    })
  })
})