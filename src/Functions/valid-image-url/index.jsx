function validImageUrl(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = url;
    img.addEventListener("load", () => resolve(true));
    img.addEventListener("error", () => resolve(false));
  });
}

export default validImageUrl;

// Copied directly from Oliver Dipple's Discord forum post. I was using fetch to check if response.status === 200,
// but that was invalidating a lot of images that would otherwise load normally, so using this solution for now.
