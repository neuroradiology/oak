var searchIndex = JSON.parse('{\
"oak_loader":{"doc":"A utility binary to run Oak Runtime.","i":[[3,"Opt","oak_loader","Command line options for the Oak loader.",null,null],[12,"application","","",0,null],[12,"grpc_tls_private_key","","",0,null],[12,"grpc_tls_certificate","","",0,null],[12,"root_tls_certificate","","",0,null],[12,"oidc_client","","",0,null],[12,"metrics_port","","",0,null],[12,"no_metrics","","",0,null],[12,"introspect_port","","",0,null],[12,"no_introspect","","",0,null],[12,"config_files","","",0,null],[3,"ConfigEntry","","A specification of a configuration entry as human readable…",null,null],[12,"key","","",1,null],[12,"filename","","",1,null],[5,"parse_config_map","","Parse a collection of configuration entries and return the…",null,[[],[["configmap",3],["result",6]]]],[5,"get_default_root_tls_certs","","Gets the default root TLS certificates from the embedded…",null,[[],[["result",6],["string",3]]]],[5,"main","","Main execution point for the Oak loader.",null,[[],["result",6]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"into_request","","",0,[[],["request",3]]],[11,"vzip","","",0,[[]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"equivalent","","",1,[[]]],[11,"into_request","","",1,[[],["request",3]]],[11,"vzip","","",1,[[]]],[11,"clone","","",0,[[],["opt",3]]],[11,"clone","","",1,[[],["configentry",3]]],[11,"eq","","",1,[[["configentry",3]]]],[11,"ne","","",1,[[["configentry",3]]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"from_str","","",1,[[],["result",4]]],[11,"clap","","",0,[[],["app",3]]],[11,"from_clap","","",0,[[["argmatches",3]]]],[11,"augment_clap","","",0,[[["app",3]],["app",3]]],[11,"is_subcommand","","",0,[[]]]],"p":[[3,"Opt"],[3,"ConfigEntry"]]},\
"oak_runtime":{"doc":"Oak Runtime implementation","i":[[3,"Runtime","oak_runtime","Runtime structure for configuring and running a set of Oak…",null,null],[12,"metrics_data","","",0,null],[3,"RuntimeConfiguration","","Configuration options that govern the behaviour of the…",null,null],[12,"metrics_port","","Port to run a metrics server on, if provided.",1,null],[12,"introspect_port","","Port to run an introspection server on, if provided.",1,null],[12,"grpc_config","","gRPC-specific options.",1,null],[12,"app_config","","Application configuration.",1,null],[12,"config_map","","Start-of-day configuration to feed to the running…",1,null],[3,"GrpcConfiguration","","Configuration options related to gRPC pseudo-Nodes.",null,null],[12,"grpc_server_tls_identity","","TLS identity to use for all gRPC Server Nodes.",2,null],[12,"oidc_client_info","","OpenID Connect Authentication client information.",2,null],[12,"grpc_client_root_tls_certificate","","Root TLS certificate to use for all gRPC Client Nodes.",2,null],[0,"auth","","Authentication functionality.",null,null],[0,"oidc_utils","oak_runtime::auth","OpenID Connect utilities for exchanging authorisation…",null,null],[3,"Claims","oak_runtime::auth::oidc_utils","Claims encoded into the identity token. Reference:…",null,null],[3,"ClientInfo","","The OpenID Connect client ID and client secret contained…",null,null],[12,"client_id","","The client ID.",3,null],[12,"client_secret","","The client secret.",3,null],[3,"TokenError","","Represents a token validation error.",null,null],[5,"parse_client_info_json","","Parses the content of the downloaded OpenID Connect client…",null,[[],[["clientinfo",3],["result",4],["box",3]]]],[5,"exchange_code_for_token","","Exchanges an authorisation code for an ID token and…",null,[[]]],[11,"new","","",4,[[],["tokenerror",3]]],[0,"config","oak_runtime","Functionality covering configuration of a Runtime instance.",null,null],[5,"configure_and_run","oak_runtime::config","Configures a [`Runtime`] from the given…",null,[[["runtimeconfiguration",3]],[["result",4],["arc",3],["oakstatus",4]]]],[5,"load_certificate","","Load a PEM encoded TLS certificate, performing (minimal)…",null,[[],[["certificate",3],["result",4]]]],[0,"proto","oak_runtime","Auto-generated code derived from protocol buffer…",null,null],[0,"oak","oak_runtime::proto","",null,null],[0,"authentication","oak_runtime::proto::oak","",null,null],[3,"AuthParameters","oak_runtime::proto::oak::authentication","Parameters needed by clients to initiate OpenID Connect…",null,null],[12,"client_id","","",5,null],[12,"auth_endpoint","","TODO(#922): Add support for scope, state and code challenge.",5,null],[3,"IdentityTokenRequest","","Request for exchanging an authorisation code for an…",null,null],[12,"auth_code","","",6,null],[3,"IdentityTokenResponse","","Wrapper for the exchanged identity token.",null,null],[12,"token","","",7,null],[0,"authentication_server","","Generated server implementations.",null,null],[8,"Authentication","oak_runtime::proto::oak::authentication::authentication_server","Generated trait containing gRPC methods that should be…",null,null],[10,"get_auth_parameters","","Gets the parameters needed by a client to make an…",8,[[["request",3]],[["pin",3],["box",3]]]],[10,"get_token_from_code","","Exchanges an authorisation code for an identity token.",8,[[["identitytokenrequest",3],["request",3]],[["box",3],["pin",3]]]],[0,"time","oak_runtime","Roughtime client implementation to provide a source of…",null,null],[3,"RoughtimeServer","oak_runtime::time","Specifies the details of a Roughtime server.",null,null],[3,"RoughtimeClient","","A client for requesting Roughtime from multiple servers.",null,null],[4,"RoughtimeError","","Possible errors returned by the Roughtime client.",null,null],[13,"Base64Error","","",9,null],[13,"InvalidSignature","","",9,null],[13,"IoError","","",9,null],[13,"MidPointTooSmall","","",9,null],[13,"NotEnoughOverlappingIntervals","","",9,null],[12,"actual","oak_runtime::time::RoughtimeError","",10,null],[12,"expected","","",10,null],[13,"RadiusTooLarge","oak_runtime::time","",9,null],[13,"RoughenoughError","","",9,null],[13,"TimeoutError","","",9,null],[5,"get_default_servers","","Gets the default Roughtime servers in the ecosystem.",null,[[],[["roughtimeserver",3],["vec",3]]]],[6,"MicrosSinceEpoch","","Time is given as microseconds since the UNIX epoch…",null,null],[17,"DEFAULT_MIN_OVERLAPPING_INTERVALS","","",null,null],[17,"DEFAULT_MAX_RADIUS_MICROSECONDS","","",null,null],[17,"DEFAULT_TIMEOUT_SECONDS","","",null,null],[17,"DEFAULT_SERVER_RETRIES","","",null,null],[11,"default","","Creates a new Roughtime client with the default settings.",11,[[]]],[11,"new","","Creates a new Roughtime client.",11,[[["roughtimeserver",3],["vec",3]]]],[11,"get_roughtime","","Gets the Roughtime from multiple servers.",11,[[],[["result",4],["microssinceepoch",6],["roughtimeerror",4]]]],[11,"new","","Creates a new instance.",12,[[]]],[11,"graph","oak_runtime","Generate a Graphviz dot graph that shows the current shape…",0,[[],["string",3]]],[11,"html","","Generate an HTML page that describes the internal state of…",0,[[],["string",3]]],[11,"object_counts","","Return counts of the number of Nodes and channels…",0,[[]]],[11,"gather_metrics","","Return the accumulated metrics for the `Runtime`.",0,[[],[["metricfamily",3],["vec",3]]]],[11,"is_terminating","","Return whether the [`Runtime`] is terminating.",0,[[]]],[11,"stop","","Signal termination to a [`Runtime`] and wait for its Node…",0,[[]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"into_request","","",0,[[],["request",3]]],[11,"vzip","","",0,[[]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"into_request","","",1,[[],["request",3]]],[11,"vzip","","",1,[[]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"into_request","","",2,[[],["request",3]]],[11,"vzip","","",2,[[]]],[11,"from","oak_runtime::auth::oidc_utils","",13,[[]]],[11,"into","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"into_request","","",13,[[],["request",3]]],[11,"vzip","","",13,[[]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"into_request","","",3,[[],["request",3]]],[11,"vzip","","",3,[[]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"to_string","","",4,[[],["string",3]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"into_request","","",4,[[],["request",3]]],[11,"vzip","","",4,[[]]],[11,"from","oak_runtime::proto::oak::authentication","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"into_request","","",5,[[],["request",3]]],[11,"vzip","","",5,[[]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"to_owned","","",6,[[]]],[11,"clone_into","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"into_request","","",6,[[],["request",3]]],[11,"vzip","","",6,[[]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_owned","","",7,[[]]],[11,"clone_into","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"into_request","","",7,[[],["request",3]]],[11,"vzip","","",7,[[]]],[11,"from","oak_runtime::time","",12,[[]]],[11,"into","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"into_request","","",12,[[],["request",3]]],[11,"vzip","","",12,[[]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"into_request","","",11,[[],["request",3]]],[11,"vzip","","",11,[[]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"to_string","","",9,[[],["string",3]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"into_request","","",9,[[],["request",3]]],[11,"vzip","","",9,[[]]],[11,"drop","oak_runtime","",0,[[]]],[11,"from","oak_runtime::time","",9,[[["error",3]]]],[11,"from","","",9,[[["error",4]]]],[11,"from","","",9,[[["decodeerror",4]]]],[11,"clone","oak_runtime::auth::oidc_utils","",3,[[],["clientinfo",3]]],[11,"clone","","",4,[[],["tokenerror",3]]],[11,"clone","oak_runtime::proto::oak::authentication","",5,[[],["authparameters",3]]],[11,"clone","","",6,[[],["identitytokenrequest",3]]],[11,"clone","","",7,[[],["identitytokenresponse",3]]],[11,"clone","oak_runtime","",1,[[],["runtimeconfiguration",3]]],[11,"clone","","",2,[[],["grpcconfiguration",3]]],[11,"default","oak_runtime::proto::oak::authentication","",5,[[],["authparameters",3]]],[11,"default","","",6,[[],["identitytokenrequest",3]]],[11,"default","","",7,[[],["identitytokenresponse",3]]],[11,"default","oak_runtime","",1,[[],["runtimeconfiguration",3]]],[11,"default","","",2,[[],["grpcconfiguration",3]]],[11,"eq","oak_runtime::proto::oak::authentication","",5,[[["authparameters",3]]]],[11,"ne","","",5,[[["authparameters",3]]]],[11,"eq","","",6,[[["identitytokenrequest",3]]]],[11,"ne","","",6,[[["identitytokenrequest",3]]]],[11,"eq","","",7,[[["identitytokenresponse",3]]]],[11,"ne","","",7,[[["identitytokenresponse",3]]]],[11,"fmt","oak_runtime::auth::oidc_utils","",13,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","oak_runtime::proto::oak::authentication","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","oak_runtime::time","",9,[[["formatter",3]],["result",6]]],[11,"fmt","oak_runtime::auth::oidc_utils","",4,[[["formatter",3]],["result",6]]],[11,"fmt","oak_runtime::time","",9,[[["formatter",3]],["result",6]]],[11,"source","oak_runtime::auth::oidc_utils","",4,[[],[["option",4],["error",8]]]],[11,"encode_raw","oak_runtime::proto::oak::authentication","",5,[[]]],[11,"merge_field","","",5,[[["decodecontext",3],["wiretype",4]],[["result",4],["decodeerror",3]]]],[11,"encoded_len","","",5,[[]]],[11,"clear","","",5,[[]]],[11,"encode_raw","","",6,[[]]],[11,"merge_field","","",6,[[["decodecontext",3],["wiretype",4]],[["result",4],["decodeerror",3]]]],[11,"encoded_len","","",6,[[]]],[11,"clear","","",6,[[]]],[11,"encode_raw","","",7,[[]]],[11,"merge_field","","",7,[[["decodecontext",3],["wiretype",4]],[["result",4],["decodeerror",3]]]],[11,"encoded_len","","",7,[[]]],[11,"clear","","",7,[[]]],[11,"deserialize","oak_runtime::auth::oidc_utils","",13,[[],["result",4]]],[11,"deserialize","","",3,[[],["result",4]]]],"p":[[3,"Runtime"],[3,"RuntimeConfiguration"],[3,"GrpcConfiguration"],[3,"ClientInfo"],[3,"TokenError"],[3,"AuthParameters"],[3,"IdentityTokenRequest"],[3,"IdentityTokenResponse"],[8,"Authentication"],[4,"RoughtimeError"],[13,"NotEnoughOverlappingIntervals"],[3,"RoughtimeClient"],[3,"RoughtimeServer"],[3,"Claims"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);