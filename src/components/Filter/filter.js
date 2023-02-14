import React, { useState } from 'react';
import './style.css'
import { Form, FormCheck } from 'react-bootstrap';
import img1 from '../../Assets/img1.png'
import img2 from '../../Assets/img2.png'
import img3 from '../../Assets/img3.png'
import img4 from '../../Assets/img4.png'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

const FilterModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [count, setCount] = useState(0);

    return (
        <>
            <button className="modal-button" onClick={() => setShowModal(true)}>Filter</button>
            {showModal && (
                <div className="modal-background searchmodal">
                    <div className="modal-card filtermodal ">
                        <header>
                            <p class="headerfilter">Refine Your Search</p>
                            <div className='refineline'>
                            </div>

                        </header>
                        <section className="modal-body">
                            <div class="ml-3">
                                <a href="#">
                                    <i class="bi bi-geo-alt-fill"></i>
                                    <span class="Filtertxt">Location</span>
                                </a></div>
                            <div class="ml-3">
                                <a href="#">
                                    <i class="bi bi-house-door-fill"></i>
                                    <span class="Filtertxt">Type of Place</span>
                                </a>
                                <Form>
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check
                                                inline
                                                label="Entire place"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-1`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Private Room"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-2`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Shared Room"
                                                type={type}
                                                id={`inline-${type}-3`}
                                            />
                                        </div>
                                    ))}
                                </Form>

                            </div>
                            <div class="ml-3">
                                <a href="#">
                                    <i class="bi bi-cash-coin"></i>
                                    <span class="Filtertxt">Price Range</span>
                                </a></div>
                            <div class="Ranger">
                                <Form.Range />
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control " placeholder="$50" aria-label="Username" />
                                    <span class="riceranger">to</span>
                                    <input type="text" class="form-control" placeholder="$500" aria-label="Server">
                                    </input>
                                </div>
                            </div>

                            <div class="ml-3">

                                <a href="#">
                                    <i class="bi bi-buildings"></i>
                                    <span class="Filtertxt">Property Type</span>
                                </a>
                                <ul class="list-group list-group-horizontal property-type-list">

                                    <li class="list-group-item">
                                        <button>
                                            <i class="bi bi-house-door"></i>
                                            <p>Houses</p>
                                        </button>

                                    </li>
                                    <li class="list-group-item">
                                        <button><i class="bi bi-buildings-fill"></i>
                                            <p>Apartment</p></button>

                                    </li>
                                    <li class="list-group-item">
                                        <button><i class="bi bi-building-fill"></i>
                                            <p>Hotel</p></button>

                                    </li>
                                    <li class="list-group-item">
                                        <button>
                                            <img style={{ height: '16px' }} src={img1} />
                                            <p>Guest House</p>
                                        </button>

                                    </li>
                                </ul>
                            </div>
                            <div class="ml-3">
                                <a href="#">
                                    <img class="convenience" src={img2} />
                                    <span class="Filtertxt">Convenience</span>
                                </a>
                                <Form>
                                    {['checkbox'].map((type) => (

                                        <>
                                            <div class="coveniencehead ">Essentails</div>
                                            <div key={`inline-${type}`} className="row ">

                                                <div className='col-6'>
                                                    <Form.Check

                                                        inline
                                                        label="Wifi"
                                                        name="group1"
                                                        type={type}
                                                        id={`inline-${type}-1`}
                                                    />
                                                </div>
                                                <div className='col-6'>
                                                    <Form.Check

                                                        inline
                                                        label="Kitchen"
                                                        name="group1"
                                                        type={type}
                                                        id={`inline-${type}-1`}
                                                    />
                                                </div>
                                                <div className='col-6'>
                                                    <Form.Check

                                                        inline
                                                        label="Washer"
                                                        name="group1"
                                                        type={type}
                                                        id={`inline-${type}-1`}
                                                    />
                                                </div>
                                                <div className='col-6'>
                                                    <Form.Check

                                                        inline
                                                        label="Dryer"
                                                        name="group1"
                                                        type={type}
                                                        id={`inline-${type}-1`}
                                                    />
                                                </div>
                                                <div className='col-6'>
                                                    <Form.Check

                                                        inline
                                                        label="Air Conditioning"
                                                        name="group1"
                                                        type={type}
                                                        id={`inline-${type}-1`}
                                                    />
                                                </div>
                                                <div className='col-6'>
                                                    <Form.Check

                                                        inline
                                                        label="Heating"
                                                        name="group1"
                                                        type={type}
                                                        id={`inline-${type}-1`}
                                                    />
                                                </div>
                                                <div className='col-6'>
                                                    <Form.Check

                                                        inline
                                                        label="Bathroom"
                                                        name="group1"
                                                        type={type}
                                                        id={`inline-${type}-1`}
                                                    />
                                                </div>
                                                <div className='col-6'>
                                                    <Form.Check

                                                        inline
                                                        label="TV"
                                                        name="group1"
                                                        type={type}
                                                        id={`inline-${type}-1`}
                                                    />
                                                </div>
                                                <div className='col-6'>
                                                    <Form.Check

                                                        inline
                                                        label="Hair Dryer"
                                                        name="group1"
                                                        type={type}
                                                        id={`inline-${type}-1`}
                                                    />
                                                </div>
                                                <div className='col-6'>
                                                    <Form.Check

                                                        inline
                                                        label="Iron"
                                                        name="group1"
                                                        type={type}
                                                        id={`inline-${type}-1`}
                                                    />
                                                </div>

                                            </div>
                                        </>

                                    ))}
                                </Form>
                                <Form>
                                    {['checkbox'].map((type) => (

                                        <>
                                            <div class="coveniencehead ">Features</div>
                                            <div key={`inline-${type}`} className="row ">

                                                <div className='col-6'>
                                                    <Form.Check

                                                        inline
                                                        label="Pool"
                                                        name="group1"
                                                        type={type}
                                                        id={`inline-${type}-1`}
                                                    />
                                                </div>
                                                <div className='col-6'>
                                                    <Form.Check

                                                        inline
                                                        label="HotTub"
                                                        name="group1"
                                                        type={type}
                                                        id={`inline-${type}-1`}
                                                    />
                                                </div>
                                                <div className='col-6'>
                                                    <Form.Check

                                                        inline
                                                        label="Parking"
                                                        name="group1"
                                                        type={type}
                                                        id={`inline-${type}-1`}
                                                    />
                                                </div>
                                                <div className='col-6'>
                                                    <Form.Check

                                                        inline
                                                        label="Ev charger"
                                                        name="group1"
                                                        type={type}
                                                        id={`inline-${type}-1`}
                                                    />
                                                </div>
                                                <div className='col-6'>
                                                    <Form.Check

                                                        inline
                                                        label="Gym"
                                                        name="group1"
                                                        type={type}
                                                        id={`inline-${type}-1`}
                                                    />
                                                </div>
                                                <div className='col-6'>
                                                    <Form.Check

                                                        inline
                                                        label="BBQ Grill"
                                                        name="group1"
                                                        type={type}
                                                        id={`inline-${type}-1`}
                                                    />
                                                </div>


                                            </div>
                                        </>

                                    ))}
                                </Form>
                            </div>
                            <div class="ml-3">
                                <a href="#">
                                    <img class="bed" src={img3} />
                                    <span class="Filtertxt">Rooms and Beds</span>
                                </a>
                                <p class="Roomandbedstxt">Bedrooms</p>

                                <ul class="d-flex gap-2 ml-3">
                                    <li class="Roomandbedtype">Any</li>
                                    <li class="Roomandbedtype">1</li>
                                    <li class="Roomandbedtype">2</li>
                                    <li class="Roomandbedtype">3</li>
                                    <li class="Roomandbedtype">4</li>
                                    <li class="Roomandbedtype">5</li>
                                    <li class="Roomandbedtype">6+</li>
                                </ul>
                                <p class="Roomandbedstxt">Beds</p>

                                <ul class="d-flex gap-2 ml-3">
                                    <li class="Roomandbedtype">Any</li>
                                    <li class="Roomandbedtype">1</li>
                                    <li class="Roomandbedtype">2</li>
                                    <li class="Roomandbedtype">3</li>
                                    <li class="Roomandbedtype">4</li>
                                    <li class="Roomandbedtype">5</li>
                                    <li class="Roomandbedtype">6+</li>
                                </ul>
                                <p class="Roomandbedstxt">Bathrooms</p>

                                <ul class="d-flex gap-2 ml-3">
                                    <li class="Roomandbedtype">Any</li>
                                    <li class="Roomandbedtype">1</li>
                                    <li class="Roomandbedtype">2</li>
                                    <li class="Roomandbedtype">3</li>
                                    <li class="Roomandbedtype">4</li>
                                    <li class="Roomandbedtype">5</li>
                                    <li class="Roomandbedtype">6+</li>
                                </ul>


                            </div>
                            <div class="ml-3">
                                <a href="#">
                                    <img class="bed" src={img4} />
                                    <span class="Filtertxt">Booking Options</span>
                                </a>
                              
                                    <div >
                                        <div className="d-flex justify-content-between">
                                            <p class="Roomandbedstxt mb-0">Instant Book</p>
                                            <BootstrapSwitchButton checked={true} onstyle="outline-secondary" offstyle="outline-success" class="switchbtn"  size="xs" />
                                        </div>
                                        <p class="instantbooktxt">Book without waiting of approval get your booking now</p>
                                       
                                    </div>
                                    <div >
                                        <div className="d-flex justify-content-between">
                                            <p class="Roomandbedstxt mb-0">Self check-in</p>
                                            <BootstrapSwitchButton checked={true} onstyle="outline-secondary" offstyle="outline-success" class="switchbtn"  size="xs" />
                                        </div>
                                        <p class="instantbooktxt">Once you arrive, the property is straightforward to access</p>
                                       
                                    </div>                                 
                                <div>
                                   

                                </div>
                            </div>

                        </section>
                        <footer className="modal-footer">
                        
                            <button className="modal-footer-button" onClick={() => setShowModal(false)}>
                                Apply
                            </button>
                        </footer>
                    </div>
                </div>
            )}
        </>
    );
};

export default FilterModal;
