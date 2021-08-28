Vue.component("linkdrip-skin", {
    data: function() {
        return {
            linkdrip: this.$root.linkdrip,
            animate: false
        };
    },
    created: function() {
        var vue = this;
        setTimeout(() => {
            this.startEmblem('[data-emblem]');
            this.startAnimations();
        }, 100);
    },
    methods: {
        startAnimations: function() {
            this.animate = true;
        },
        startEmblem: function(el, str) {
            var element = document.querySelector(el);
            var text = str ? str : element.innerHTML;
            element.innerHTML = "";
            for (var i = 0; i < text.length; i++) {
                var letter = text[i];
                var span = document.createElement("span");
                var node = document.createTextNode(letter);
                var r = (360 / text.length) * i;
                var x = (Math.PI / text.length).toFixed(0) * i;
                var y = (Math.PI / text.length).toFixed(0) * i;
                span.appendChild(node);
                span.style.webkitTransform =
                    "rotateZ(" + r + "deg) translate3d(" + x + "px," + y + "px,0)";
                span.style.transform =
                    "rotateZ(" + r + "deg) translate3d(" + x + "px," + y + "px,0)";
                element.appendChild(span);
            }
        }
    },
    template: `<div data-container>
			<ul data-links :class="{ active: animate }">
				<li data-link-container v-for="link in linkdrip.links" v-if="link.label !== ''">
					<a data-link :href="link.url" target="_blank">
						<span data-button-bg></span>
						<span data-button-label v-text="link.label"></span>
					</a>
				</li>
			</ul>
			<div data-profile-container :class="{ active: animate }">
				<h1 data-username v-text="'@'+linkdrip.profile.name.text"></h1>
				<p data-description v-text="linkdrip.profile.description.text"></p>
			</div>
			<div data-avatar-container :class="{ active: animate }">
				<img data-avatar :src="linkdrip.profile.image" />
				<div data-emblem>
					<slot v-for="n in 3">{{linkdrip.profile.name.text+' &middot; '}}</slot>
				</div>
			</div>
		</div>`
});

new Vue({
    el: "#app",
    data: {
        search: new URLSearchParams(window.location.search),
        visible: false,
        linktree: false,
        linkdrip: {
            skin: "SKIN_NAME",
            profile: {
                image: "https://github.com/luisangelmaciel/luisangelmaciel/blob/main/img/favicon-hihello.png?raw=true", //"https://smhlancers.org/wp-content/uploads/2016/06/profile-placeholder-300x300.png",
                name: {
                    text: "luisangelmaciel"
                },
                description: {
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
                }
            },
            links: [{
                    url: "http://google.com",
                    label: "Instagram"
                },
                {
                    url: "http://google.com",
                    label: "TikTok"
                },
                {
                    url: "http://google.com",
                    label: "Twitter"
                }
            ]
        }
    }
});