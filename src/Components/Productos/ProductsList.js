

const ProductsList = ({data}) => {
    const {title, image, description} = data

  return (
    <div className="flex justify-center mt-10">
      <div className="rounded-lg shadow-lg bg-white w-64">
        <div data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img
            className="rounded-t-md"
            src={image}
            alt=""
          />
        </div>
        <div className="p-6">
          <h5 className="text-sky-700 text-xl font-medium sm-2"> {title} </h5>
          <p className="text-gray-700 text-base mb-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductsList