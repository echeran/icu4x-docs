(function() {var implementors = {};
implementors["icu_provider_blob"] = [{"text":"impl&lt;'data, M&gt; <a class=\"trait\" href=\"icu_provider/data_provider/trait.DataProvider.html\" title=\"trait icu_provider::data_provider::DataProvider\">DataProvider</a>&lt;'data, M&gt; for <a class=\"struct\" href=\"icu_provider_blob/struct.BlobDataProvider.html\" title=\"struct icu_provider_blob::BlobDataProvider\">BlobDataProvider</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;M: <a class=\"trait\" href=\"icu_provider/marker/trait.DataMarker.html\" title=\"trait icu_provider::marker::DataMarker\">DataMarker</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;for&lt;'de&gt; <a class=\"struct\" href=\"yoke/trait_hack/struct.YokeTraitHack.html\" title=\"struct yoke::trait_hack::YokeTraitHack\">YokeTraitHack</a>&lt;&lt;M::<a class=\"type\" href=\"icu_provider/marker/trait.DataMarker.html#associatedtype.Yokeable\" title=\"type icu_provider::marker::DataMarker::Yokeable\">Yokeable</a> as <a class=\"trait\" href=\"yoke/yokeable/trait.Yokeable.html\" title=\"trait yoke::yokeable::Yokeable\">Yokeable</a>&lt;'de&gt;&gt;::<a class=\"type\" href=\"yoke/yokeable/trait.Yokeable.html#associatedtype.Output\" title=\"type yoke::yokeable::Yokeable::Output\">Output</a>&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.128/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":["icu_provider_blob::blob_data_provider::BlobDataProvider"]},{"text":"impl&lt;'data, M&gt; <a class=\"trait\" href=\"icu_provider/data_provider/trait.DataProvider.html\" title=\"trait icu_provider::data_provider::DataProvider\">DataProvider</a>&lt;'data, M&gt; for <a class=\"struct\" href=\"icu_provider_blob/struct.StaticDataProvider.html\" title=\"struct icu_provider_blob::StaticDataProvider\">StaticDataProvider</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;M: <a class=\"trait\" href=\"icu_provider/marker/trait.DataMarker.html\" title=\"trait icu_provider::marker::DataMarker\">DataMarker</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;M::<a class=\"type\" href=\"icu_provider/marker/trait.DataMarker.html#associatedtype.Yokeable\" title=\"type icu_provider::marker::DataMarker::Yokeable\">Yokeable</a>: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.128/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'static&gt;,&nbsp;</span>","synthetic":false,"types":["icu_provider_blob::static_data_provider::StaticDataProvider"]}];
implementors["icu_provider_cldr"] = [{"text":"impl&lt;'data&gt; <a class=\"trait\" href=\"icu_provider/data_provider/trait.DataProvider.html\" title=\"trait icu_provider::data_provider::DataProvider\">DataProvider</a>&lt;'data, <a class=\"struct\" href=\"icu_locale_canonicalizer/provider/struct.AliasesV1Marker.html\" title=\"struct icu_locale_canonicalizer::provider::AliasesV1Marker\">AliasesV1Marker</a>&gt; for <a class=\"struct\" href=\"icu_provider_cldr/transform/struct.AliasesProvider.html\" title=\"struct icu_provider_cldr::transform::AliasesProvider\">AliasesProvider</a>&lt;'data&gt;","synthetic":false,"types":["icu_provider_cldr::transform::aliases::AliasesProvider"]},{"text":"impl&lt;'data&gt; <a class=\"trait\" href=\"icu_provider/data_provider/trait.DataProvider.html\" title=\"trait icu_provider::data_provider::DataProvider\">DataProvider</a>&lt;'data, <a class=\"struct\" href=\"icu_provider/serde/struct.SerdeSeDataStructMarker.html\" title=\"struct icu_provider::serde::SerdeSeDataStructMarker\">SerdeSeDataStructMarker</a>&gt; for <a class=\"struct\" href=\"icu_provider_cldr/transform/struct.AliasesProvider.html\" title=\"struct icu_provider_cldr::transform::AliasesProvider\">AliasesProvider</a>&lt;'data&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;'data: 'data,&nbsp;</span>","synthetic":false,"types":["icu_provider_cldr::transform::aliases::AliasesProvider"]},{"text":"impl&lt;'data&gt; <a class=\"trait\" href=\"icu_provider/data_provider/trait.DataProvider.html\" title=\"trait icu_provider::data_provider::DataProvider\">DataProvider</a>&lt;'data, <a class=\"struct\" href=\"icu_datetime/provider/gregory/struct.DatePatternsV1Marker.html\" title=\"struct icu_datetime::provider::gregory::DatePatternsV1Marker\">DatePatternsV1Marker</a>&gt; for <a class=\"struct\" href=\"icu_provider_cldr/transform/struct.DatePatternsProvider.html\" title=\"struct icu_provider_cldr::transform::DatePatternsProvider\">DatePatternsProvider</a>&lt;'data&gt;","synthetic":false,"types":["icu_provider_cldr::transform::dates::patterns::DatePatternsProvider"]},{"text":"impl&lt;'data&gt; <a class=\"trait\" href=\"icu_provider/data_provider/trait.DataProvider.html\" title=\"trait icu_provider::data_provider::DataProvider\">DataProvider</a>&lt;'data, <a class=\"struct\" href=\"icu_provider/serde/struct.SerdeSeDataStructMarker.html\" title=\"struct icu_provider::serde::SerdeSeDataStructMarker\">SerdeSeDataStructMarker</a>&gt; for <a class=\"struct\" href=\"icu_provider_cldr/transform/struct.DatePatternsProvider.html\" title=\"struct icu_provider_cldr::transform::DatePatternsProvider\">DatePatternsProvider</a>&lt;'data&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;'data: 'data,&nbsp;</span>","synthetic":false,"types":["icu_provider_cldr::transform::dates::patterns::DatePatternsProvider"]},{"text":"impl&lt;'data&gt; <a class=\"trait\" href=\"icu_provider/data_provider/trait.DataProvider.html\" title=\"trait icu_provider::data_provider::DataProvider\">DataProvider</a>&lt;'data, <a class=\"struct\" href=\"icu_datetime/provider/gregory/skeletons/struct.DateSkeletonPatternsV1Marker.html\" title=\"struct icu_datetime::provider::gregory::skeletons::DateSkeletonPatternsV1Marker\">DateSkeletonPatternsV1Marker</a>&gt; for <a class=\"struct\" href=\"icu_provider_cldr/transform/struct.DateSkeletonPatternsProvider.html\" title=\"struct icu_provider_cldr::transform::DateSkeletonPatternsProvider\">DateSkeletonPatternsProvider</a>&lt;'data&gt;","synthetic":false,"types":["icu_provider_cldr::transform::dates::skeletons::DateSkeletonPatternsProvider"]},{"text":"impl&lt;'data&gt; <a class=\"trait\" href=\"icu_provider/data_provider/trait.DataProvider.html\" title=\"trait icu_provider::data_provider::DataProvider\">DataProvider</a>&lt;'data, <a class=\"struct\" href=\"icu_provider/serde/struct.SerdeSeDataStructMarker.html\" title=\"struct icu_provider::serde::SerdeSeDataStructMarker\">SerdeSeDataStructMarker</a>&gt; for <a class=\"struct\" href=\"icu_provider_cldr/transform/struct.DateSkeletonPatternsProvider.html\" title=\"struct icu_provider_cldr::transform::DateSkeletonPatternsProvider\">DateSkeletonPatternsProvider</a>&lt;'data&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;'data: 'data,&nbsp;</span>","synthetic":false,"types":["icu_provider_cldr::transform::dates::skeletons::DateSkeletonPatternsProvider"]},{"text":"impl&lt;'data&gt; <a class=\"trait\" href=\"icu_provider/data_provider/trait.DataProvider.html\" title=\"trait icu_provider::data_provider::DataProvider\">DataProvider</a>&lt;'data, <a class=\"struct\" href=\"icu_datetime/provider/gregory/symbols/struct.DateSymbolsV1Marker.html\" title=\"struct icu_datetime::provider::gregory::symbols::DateSymbolsV1Marker\">DateSymbolsV1Marker</a>&gt; for <a class=\"struct\" href=\"icu_provider_cldr/transform/struct.DateSymbolsProvider.html\" title=\"struct icu_provider_cldr::transform::DateSymbolsProvider\">DateSymbolsProvider</a>&lt;'data&gt;","synthetic":false,"types":["icu_provider_cldr::transform::dates::symbols::DateSymbolsProvider"]},{"text":"impl&lt;'data&gt; <a class=\"trait\" href=\"icu_provider/data_provider/trait.DataProvider.html\" title=\"trait icu_provider::data_provider::DataProvider\">DataProvider</a>&lt;'data, <a class=\"struct\" href=\"icu_provider/serde/struct.SerdeSeDataStructMarker.html\" title=\"struct icu_provider::serde::SerdeSeDataStructMarker\">SerdeSeDataStructMarker</a>&gt; for <a class=\"struct\" href=\"icu_provider_cldr/transform/struct.DateSymbolsProvider.html\" title=\"struct icu_provider_cldr::transform::DateSymbolsProvider\">DateSymbolsProvider</a>&lt;'data&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;'data: 'data,&nbsp;</span>","synthetic":false,"types":["icu_provider_cldr::transform::dates::symbols::DateSymbolsProvider"]},{"text":"impl&lt;'data&gt; <a class=\"trait\" href=\"icu_provider/data_provider/trait.DataProvider.html\" title=\"trait icu_provider::data_provider::DataProvider\">DataProvider</a>&lt;'data, <a class=\"struct\" href=\"icu_locale_canonicalizer/provider/struct.LikelySubtagsV1Marker.html\" title=\"struct icu_locale_canonicalizer::provider::LikelySubtagsV1Marker\">LikelySubtagsV1Marker</a>&gt; for <a class=\"struct\" href=\"icu_provider_cldr/transform/struct.LikelySubtagsProvider.html\" title=\"struct icu_provider_cldr::transform::LikelySubtagsProvider\">LikelySubtagsProvider</a>&lt;'data&gt;","synthetic":false,"types":["icu_provider_cldr::transform::likelysubtags::LikelySubtagsProvider"]},{"text":"impl&lt;'data&gt; <a class=\"trait\" href=\"icu_provider/data_provider/trait.DataProvider.html\" title=\"trait icu_provider::data_provider::DataProvider\">DataProvider</a>&lt;'data, <a class=\"struct\" href=\"icu_provider/serde/struct.SerdeSeDataStructMarker.html\" title=\"struct icu_provider::serde::SerdeSeDataStructMarker\">SerdeSeDataStructMarker</a>&gt; for <a class=\"struct\" href=\"icu_provider_cldr/transform/struct.LikelySubtagsProvider.html\" title=\"struct icu_provider_cldr::transform::LikelySubtagsProvider\">LikelySubtagsProvider</a>&lt;'data&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;'data: 'data,&nbsp;</span>","synthetic":false,"types":["icu_provider_cldr::transform::likelysubtags::LikelySubtagsProvider"]},{"text":"impl&lt;'data&gt; <a class=\"trait\" href=\"icu_provider/data_provider/trait.DataProvider.html\" title=\"trait icu_provider::data_provider::DataProvider\">DataProvider</a>&lt;'data, <a class=\"struct\" href=\"icu_list/provider/struct.ListFormatterPatternsV1Marker.html\" title=\"struct icu_list::provider::ListFormatterPatternsV1Marker\">ListFormatterPatternsV1Marker</a>&gt; for <a class=\"struct\" href=\"icu_provider_cldr/transform/struct.ListProvider.html\" title=\"struct icu_provider_cldr::transform::ListProvider\">ListProvider</a>&lt;'data&gt;","synthetic":false,"types":["icu_provider_cldr::transform::list::ListProvider"]},{"text":"impl&lt;'data&gt; <a class=\"trait\" href=\"icu_provider/data_provider/trait.DataProvider.html\" title=\"trait icu_provider::data_provider::DataProvider\">DataProvider</a>&lt;'data, <a class=\"struct\" href=\"icu_provider/serde/struct.SerdeSeDataStructMarker.html\" title=\"struct icu_provider::serde::SerdeSeDataStructMarker\">SerdeSeDataStructMarker</a>&gt; for <a class=\"struct\" href=\"icu_provider_cldr/transform/struct.ListProvider.html\" title=\"struct icu_provider_cldr::transform::ListProvider\">ListProvider</a>&lt;'data&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;'data: 'data,&nbsp;</span>","synthetic":false,"types":["icu_provider_cldr::transform::list::ListProvider"]},{"text":"impl&lt;'data&gt; <a class=\"trait\" href=\"icu_provider/data_provider/trait.DataProvider.html\" title=\"trait icu_provider::data_provider::DataProvider\">DataProvider</a>&lt;'data, <a class=\"struct\" href=\"icu_decimal/provider/struct.DecimalSymbolsV1Marker.html\" title=\"struct icu_decimal::provider::DecimalSymbolsV1Marker\">DecimalSymbolsV1Marker</a>&gt; for <a class=\"struct\" href=\"icu_provider_cldr/transform/struct.NumbersProvider.html\" title=\"struct icu_provider_cldr::transform::NumbersProvider\">NumbersProvider</a>","synthetic":false,"types":["icu_provider_cldr::transform::numbers::NumbersProvider"]},{"text":"impl&lt;'data&gt; <a class=\"trait\" href=\"icu_provider/data_provider/trait.DataProvider.html\" title=\"trait icu_provider::data_provider::DataProvider\">DataProvider</a>&lt;'data, <a class=\"struct\" href=\"icu_provider/serde/struct.SerdeSeDataStructMarker.html\" title=\"struct icu_provider::serde::SerdeSeDataStructMarker\">SerdeSeDataStructMarker</a>&gt; for <a class=\"struct\" href=\"icu_provider_cldr/transform/struct.NumbersProvider.html\" title=\"struct icu_provider_cldr::transform::NumbersProvider\">NumbersProvider</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;'data: 'data,&nbsp;</span>","synthetic":false,"types":["icu_provider_cldr::transform::numbers::NumbersProvider"]},{"text":"impl&lt;'data&gt; <a class=\"trait\" href=\"icu_provider/data_provider/trait.DataProvider.html\" title=\"trait icu_provider::data_provider::DataProvider\">DataProvider</a>&lt;'data, <a class=\"struct\" href=\"icu_plurals/provider/struct.PluralRulesV1Marker.html\" title=\"struct icu_plurals::provider::PluralRulesV1Marker\">PluralRulesV1Marker</a>&gt; for <a class=\"struct\" href=\"icu_provider_cldr/transform/struct.PluralsProvider.html\" title=\"struct icu_provider_cldr::transform::PluralsProvider\">PluralsProvider</a>&lt;'data&gt;","synthetic":false,"types":["icu_provider_cldr::transform::plurals::PluralsProvider"]},{"text":"impl&lt;'data&gt; <a class=\"trait\" href=\"icu_provider/data_provider/trait.DataProvider.html\" title=\"trait icu_provider::data_provider::DataProvider\">DataProvider</a>&lt;'data, <a class=\"struct\" href=\"icu_provider/serde/struct.SerdeSeDataStructMarker.html\" title=\"struct icu_provider::serde::SerdeSeDataStructMarker\">SerdeSeDataStructMarker</a>&gt; for <a class=\"struct\" href=\"icu_provider_cldr/transform/struct.PluralsProvider.html\" title=\"struct icu_provider_cldr::transform::PluralsProvider\">PluralsProvider</a>&lt;'data&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;'data: 'data,&nbsp;</span>","synthetic":false,"types":["icu_provider_cldr::transform::plurals::PluralsProvider"]},{"text":"impl&lt;'a, 'data&gt; <a class=\"trait\" href=\"icu_provider/data_provider/trait.DataProvider.html\" title=\"trait icu_provider::data_provider::DataProvider\">DataProvider</a>&lt;'data, <a class=\"struct\" href=\"icu_provider/serde/struct.SerdeSeDataStructMarker.html\" title=\"struct icu_provider::serde::SerdeSeDataStructMarker\">SerdeSeDataStructMarker</a>&gt; for <a class=\"struct\" href=\"icu_provider_cldr/transform/struct.CldrJsonDataProvider.html\" title=\"struct icu_provider_cldr::transform::CldrJsonDataProvider\">CldrJsonDataProvider</a>&lt;'a, 'data&gt;","synthetic":false,"types":["icu_provider_cldr::transform::CldrJsonDataProvider"]}];
implementors["icu_provider_fs"] = [{"text":"impl&lt;'data, M&gt; <a class=\"trait\" href=\"icu_provider/data_provider/trait.DataProvider.html\" title=\"trait icu_provider::data_provider::DataProvider\">DataProvider</a>&lt;'data, M&gt; for <a class=\"struct\" href=\"icu_provider_fs/struct.FsDataProvider.html\" title=\"struct icu_provider_fs::FsDataProvider\">FsDataProvider</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;M: <a class=\"trait\" href=\"icu_provider/marker/trait.DataMarker.html\" title=\"trait icu_provider::marker::DataMarker\">DataMarker</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;for&lt;'de&gt; <a class=\"struct\" href=\"yoke/trait_hack/struct.YokeTraitHack.html\" title=\"struct yoke::trait_hack::YokeTraitHack\">YokeTraitHack</a>&lt;&lt;M::<a class=\"type\" href=\"icu_provider/marker/trait.DataMarker.html#associatedtype.Yokeable\" title=\"type icu_provider::marker::DataMarker::Yokeable\">Yokeable</a> as <a class=\"trait\" href=\"yoke/yokeable/trait.Yokeable.html\" title=\"trait yoke::yokeable::Yokeable\">Yokeable</a>&lt;'de&gt;&gt;::<a class=\"type\" href=\"yoke/yokeable/trait.Yokeable.html#associatedtype.Output\" title=\"type yoke::yokeable::Yokeable::Output\">Output</a>&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.128/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":["icu_provider_fs::fs_data_provider::FsDataProvider"]}];
implementors["icu_provider_uprops"] = [{"text":"impl&lt;'data, T:&nbsp;<a class=\"trait\" href=\"icu_codepointtrie/codepointtrie/trait.TrieValue.html\" title=\"trait icu_codepointtrie::codepointtrie::TrieValue\">TrieValue</a>&gt; <a class=\"trait\" href=\"icu_provider/data_provider/trait.DataProvider.html\" title=\"trait icu_provider::data_provider::DataProvider\">DataProvider</a>&lt;'data, <a class=\"struct\" href=\"icu_properties/provider/struct.UnicodePropertyMapV1Marker.html\" title=\"struct icu_properties::provider::UnicodePropertyMapV1Marker\">UnicodePropertyMapV1Marker</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"icu_provider_uprops/struct.EnumeratedPropertyCodePointTrieProvider.html\" title=\"struct icu_provider_uprops::EnumeratedPropertyCodePointTrieProvider\">EnumeratedPropertyCodePointTrieProvider</a>","synthetic":false,"types":["icu_provider_uprops::enum_codepointtrie::EnumeratedPropertyCodePointTrieProvider"]},{"text":"impl&lt;'data&gt; <a class=\"trait\" href=\"icu_provider/data_provider/trait.DataProvider.html\" title=\"trait icu_provider::data_provider::DataProvider\">DataProvider</a>&lt;'data, <a class=\"struct\" href=\"icu_provider/serde/struct.SerdeSeDataStructMarker.html\" title=\"struct icu_provider::serde::SerdeSeDataStructMarker\">SerdeSeDataStructMarker</a>&gt; for <a class=\"struct\" href=\"icu_provider_uprops/struct.EnumeratedPropertyCodePointTrieProvider.html\" title=\"struct icu_provider_uprops::EnumeratedPropertyCodePointTrieProvider\">EnumeratedPropertyCodePointTrieProvider</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;'data: 'data,&nbsp;</span>","synthetic":false,"types":["icu_provider_uprops::enum_codepointtrie::EnumeratedPropertyCodePointTrieProvider"]},{"text":"impl&lt;'data&gt; <a class=\"trait\" href=\"icu_provider/data_provider/trait.DataProvider.html\" title=\"trait icu_provider::data_provider::DataProvider\">DataProvider</a>&lt;'data, <a class=\"struct\" href=\"icu_properties/provider/struct.UnicodePropertyV1Marker.html\" title=\"struct icu_properties::provider::UnicodePropertyV1Marker\">UnicodePropertyV1Marker</a>&gt; for <a class=\"struct\" href=\"icu_provider_uprops/struct.PropertiesDataProvider.html\" title=\"struct icu_provider_uprops::PropertiesDataProvider\">PropertiesDataProvider</a>","synthetic":false,"types":["icu_provider_uprops::provider::PropertiesDataProvider"]},{"text":"impl&lt;'data&gt; <a class=\"trait\" href=\"icu_provider/data_provider/trait.DataProvider.html\" title=\"trait icu_provider::data_provider::DataProvider\">DataProvider</a>&lt;'data, <a class=\"struct\" href=\"icu_provider/serde/struct.SerdeSeDataStructMarker.html\" title=\"struct icu_provider::serde::SerdeSeDataStructMarker\">SerdeSeDataStructMarker</a>&gt; for <a class=\"struct\" href=\"icu_provider_uprops/struct.PropertiesDataProvider.html\" title=\"struct icu_provider_uprops::PropertiesDataProvider\">PropertiesDataProvider</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;'data: 'data,&nbsp;</span>","synthetic":false,"types":["icu_provider_uprops::provider::PropertiesDataProvider"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()