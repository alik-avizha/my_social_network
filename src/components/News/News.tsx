import classes from './News.module.css';

const News = () => {
    return (
        <div className={classes.news}>
            <h2 className={classes.title}>Новости</h2>
            <div className={classes.item}>
                <img className={classes.image} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/News.svg/1280px-News.svg.png" alt="news" />
                <div className={classes.content}>
                    <h3 className={classes.headline}>Заголовок новости</h3>
                    <p className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada velit quis augue lacinia, sit amet pellentesque metus maximus. Fusce bibendum enim eu tortor aliquet, nec commodo enim accumsan. Pellentesque eu dui ut tellus sollicitudin bibendum.</p>
                    <a className={classes.link} href="#">Читать далее</a>
                </div>
            </div>
            <div className={classes.item}>
                <img className={classes.image} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/News.svg/1280px-News.svg.png" alt="news" />
                <div className={classes.content}>
                    <h3 className={classes.headline}>Еще один заголовок новости</h3>
                    <p className={classes.text}>Donec eget bibendum ante. Fusce ac vestibulum magna. Aliquam imperdiet commodo purus, vel dapibus quam. Nullam venenatis blandit mauris, eget volutpat eros sodales at.</p>
                    <a className={classes.link} href="#">Читать далее</a>
                </div>
            </div>
        </div>
    );
};

export default News;