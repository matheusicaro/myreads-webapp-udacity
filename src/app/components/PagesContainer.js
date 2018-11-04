import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Grid from '@material-ui/core/Grid';

import HomeContainer from '../pages/home/HomeContainer'
import SearchContainer from '../pages/search/SearchContainer'

export default class componentName extends Component {
    render() {
        return (
                <Grid>
                    <section>

                    <Route exact path='/' component={HomeContainer} />
                    <Route exact path='/search' component={SearchContainer} />

                    </section>
                </Grid>
        )
    }
}