For this facial recognition softare to work you need to install certain dependencies:
1. make sure your python is 64bit 
  - if you run python in your power shell, it should tell you

2. Go to this link and install the free version. 
https://visualstudio.microsoft.com/downloads/?utm_medium=microsoft&utm_source=docs.microsoft.com&utm_campaign=button+cta&utm_content=download+vs2019+rc
   
  - when it asks you which packages you want, MAKE SURE to click/include the "Desktop Development with C++"

3. Once it's installed, in the terminal, go to /Friendsonfilm/Facial Recog/ and type:
  -->    pip install -r requirements.txt   <--

  - if you don't have pip, I think its just python install pip (check first though)

4. Should work now. Test it by running --> python ./face_rec.py
  - Should Identify whoevers picture it is in user.jpg

