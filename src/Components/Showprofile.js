import React, { useState } from 'react'
function Showprofile() {
    const [userName, setUserName] = useState("");
    const [data, setData] = useState({});


    const onChangeHandler = (e) => {
        setUserName(e.target.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        fetch(`https://api.github.com/users/${userName}`)
            .then((response) => {
                return response.json();
            }).then((originalData) => {
                if (originalData) {
                    setData(originalData);
                }
            })
    }
    return (
        <>
            <div className="container my-5" >
                <div className="row mt-auto">
                    <div className="col-lg-8 col-sm-12 text-center mx-auto">
                        <h2 className="display-4 mb-3">GitHub User Profile App With React JS</h2>
                    </div>
                </div>
                <div className="row">

                    <div className="col-md-6 mx-auto text-center">
                        <div className="row mb-5 justify-content-center">
                            <form id="myform" autoComplete='off' onSubmit={onSubmitHandler}>
                                <div className="col-lg-8 col-sm-12 my-2 form-group">
                                    <input className="form-control form-control-lg" placeholder="Github username" type={userName} id="w" onChange={onChangeHandler} />
                                </div>
                                <div className="col-lg-3 col-sm-12 my-2 form-group">
                                    <button className="btn btn-primary btn-block w-100 btn-lg">Search</button>
                                </div>
                            </form>

                        </div>



                    </div>
                </div>
            </div>
            <div className='container my-3'>

                <div className="card p-3">
                    <div className="d-flex align-items-center">
                        <div className="image">
                            <img src={data.avatar_url} className="rounded" width="155" alt='user-img' />
                        </div>
                        <div className="ml-3 w-100">
                            <h4 className="mb-0 mt-0">{data.login}</h4><span>{data.bio}</span>
                            <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                <div className="d-flex flex-column"> <span className="articles">Repo</span> <span className="number1">{data.public_repos}</span> </div>
                                <div className="d-flex flex-column"> <span className="followers">Followers</span> <span className="number2">{data.followers}</span> </div>
                                <div className="d-flex flex-column"> <span className="rating">following</span> <span className="number3">{data.following}</span> </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Showprofile;
