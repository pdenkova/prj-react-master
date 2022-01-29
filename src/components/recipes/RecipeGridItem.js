import FavoriteButton from "./FavoriteButton";

function RecipeGridItem ({recipe}) {

    return (
        <> 
        <div className="col-md-4">
        <div className="recipe-grid-container img-thumbnail mb-3">
        <div className="d-flex">
                <img className="recipe-image w-50"
                    src={recipe.image} alt={recipe.title}/>
                    <div className="fw-bold recipe-title px-2">{recipe.title}</div>
                    <FavoriteButton recipe = {recipe}/>
                    </div>
                <div className="recipe-description mt-2 px"> <p><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Ut sagittis ullamcorper efficitur. Cras hendrerit placerat tortor,
                        et suscipit velit efficitur at. In eu pharetra nulla. Sed scelerisque est
                        laoreet bibendum volutpat. Cras in ipsum id sapien posuere fringilla. Duis in efficitur est. 
                        Vestibulum placerat tempus leo quis malesuada.</em></p></div>
            </div>

        </div>
    </>
    )
}
export default RecipeGridItem;