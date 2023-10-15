package com.sendmessage.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsConfigurationSource;
import org.springframework.web.cors.reactive.CorsWebFilter;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.ContentNegotiationConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class CorsConfig implements WebMvcConfigurer {



        @Override
        public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {
            configurer.favorPathExtension(false) // Disable file extension-based content negotiation
                    .favorParameter(true) // Enable content negotiation based on request parameters
                    .parameterName("mediaType") // Define the parameter name for content negotiation
                    .ignoreAcceptHeader(false) // Do not ignore the 'Accept' header
                    .defaultContentType(MediaType.APPLICATION_JSON) // Set the default content type
                    .mediaType("json", MediaType.APPLICATION_JSON) // Define a media type and its corresponding content type
                    .mediaType("xml", MediaType.APPLICATION_XML) // Define another media type
                    .mediaType("html", MediaType.TEXT_HTML);

            // You can add more media types as needed


    }

}
