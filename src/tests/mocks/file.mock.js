 const file = new File(["hello"], "hello.png", { type: "image/png" });

 export const mockFile = {
    name: file.name,
    size: file.size,
    type: file.type,
    lastModified: Date.now(),
  };