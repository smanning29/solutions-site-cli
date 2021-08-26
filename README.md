# solutions-site-cli

## Created by Sarah Manning for Enacting Climate https://enactingclimate.org/

Web version of the Drawdown Adaptation for 5th Grade project

Single page app created with Vue-Cli https://cli.vuejs.org/ 

Styling done with Tailwind CSS https://tailwindcss.com/docs

Includes Animate on Scroll Library https://github.com/michalsnik/aos

### Project structure
```
-App.vue-
    <Header> <Nav>
    <router-view>
        -Home.vue-
            <HoverBox.vue>
            <HoverBoxE.vue>
        -Solutions.vue-
            <SolutionHeader.vue>
            <SolutionBody.vue>
            <SolutionAside.vue>
        -About.vue-
    <Footer>
```
### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
